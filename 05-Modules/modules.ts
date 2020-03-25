// TypeScript is modular, we can divide our code up over several files
// In Angular 2 we then use  "import {} from ''" to access the code in these files

// We export a class, interface, variable, ... by adding 'export' keyword in front of it

export class ExportedClass {
    // This class is exported
}

/* Instructor: It's important to understand that we're exporting everything basically because we're not separating parts of our app in files which live on their own. 
But all these files need to be able to work together. And therefore we're using export keyword and this module driven approach to share the code basically */