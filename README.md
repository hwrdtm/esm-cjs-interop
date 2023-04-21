# What

This is a simple library to test how we can write TypeScript that gets compiled to an ECMAScript module (ESM) that then loads in another ESM module, `multiformats`. 

We use Jasmine as the test runner since it has ESM support. Other alternatives such as Jest only have **experimental** support for ESM and `ts-jest` has been failing to work successfully here.

Try tweaking the `tsconfig.json` to compile to a CommonJS module and see it fail to load in the `multiformats` package.