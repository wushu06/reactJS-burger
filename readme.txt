*- codpen: react.min + reactDOM + preprocessor babel
   create function with return then reactDOM.render and get element with querySelector
   change class to className
   the function gets called like this <Person />
   the function takes (props) which are arguments and you pass them like this <Person age='23' name='nour' />
   you call those props like this: {props.age}
   create one id in html called app then create var = app and pass the functions <Person /> with the required props and wrap them in single <div>
   now you can call render(app, document.querySelector('#app'));

*- arrow function + short arroe function
*- import export modules:
   export default function   /   import doesntmatter from
   export const              / import {fun}   / import {smth as Smth}

*- ES6 / ES7
   if extend class and both have constructor you need to call super()
   in ES7 you dont need constructor you can just store in const

*- spread and rest operator
   ...
   const newArray = [...oldArray,1,2]
   accepte unlimited arguments
   const filter = (...args) => {
   }


*- array map
    const numbers = [1,2,3];
    const doubleNumers = numbers.map((num) => {
    return num*2;
    });

    console.log(doubleNumers);

*- npm install -g create-react-app
    create-react-app myapp
    npm start

*- Raduim package install + wrap and import
*- npm run eject
add this to webpack dev and prod
  modules: true,
  localIdentName: '[name]__[local]__[hash:base64:5]'

  import classes from './app.css'
  <div className={classes.App} >

*- npm install --save prop-types
   in class access props with this.props

app -> burgerbuilder -> burger -> ingredients

*-     const transformedIngredients = Object.keys(props.ing).map(ingKey => {
           return [...Array(props.ing[ingKey])].map((_, i) => {
               return <Ingredients key={ingKey + 1 } type={ingKey}/>;
           });
       });
       Object.keys(props.ing) // get variable ing and use javascript to get a key from an object json
       .map(ingKey // big map functions with an arg ingKey which are the keys that we got earlier // remember .map gets the content of the array attached to it
        [...Array //spread array
        props.ing[ingKey] // get now the ing array content based on the keys
        .map((_, i) // when you get those content map through it to create foreach loop similar situation
        key={ingKey + 1 } type={ingKey} // types are now ingKey and key because the return must be unique


*- reaching to the server
    npm install --save axios
*- npm install --save react-router-dom




