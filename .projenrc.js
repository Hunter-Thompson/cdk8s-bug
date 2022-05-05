const { cdk8s } = require('projen');
const project = new cdk8s.Cdk8sTypeScriptApp({
  cdk8sVersion: '2.2.85',
  cdk8sCliVersion: '1.0.155',
  defaultReleaseBranch: 'main',
  name: 'cdk8s-cli-bug',
  releaseWorkflow: true,
  depsUpgrade: false,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
