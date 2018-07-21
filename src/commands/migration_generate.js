import { _baseOptions, _underscoreOption } from '../core/yargs';

import helpers from '../helpers';
import fs from 'fs';
import clc from 'cli-color';

exports.builder =
  yargs =>
    _underscoreOption(
      _baseOptions(yargs)
        .option('name', {
          describe: 'Defines the name of the migration',
          type: 'string',
          demandOption: true
        })
        .option('typescript', {
          describe: 'Generate TypeScript version of migration',
          alias: 'ts',
          default: false
        })
    )
      .help()
      .argv;

exports.handler = function (args) {
  helpers.init.createMigrationsFolder();

  const extension = args.typescript ? 'ts' : 'js';
  const migrationPath = helpers.path.getMigrationPath(args.name, {
    extension
  });

  fs.writeFileSync(
    migrationPath,
    helpers.template.render(`migrations/skeleton.${extension}`, {}, {
      beautify: false
    })
  );

  helpers.view.log(
    'New migration was created at',
    clc.blueBright(migrationPath),
    '.'
  );

  process.exit(0);
};