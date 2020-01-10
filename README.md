### React Flats

![Flats](https://raw.githubusercontent.com/lewagon/react-redux-images/master/react/flats.png)


#### 2. Features

1. When a user clicks on a flat from the list, the map should display a red dot on the flat's location.

#### 3. Guidelines

- First, identify the components you need in your App.
- Then, think static and design their `props`
- Then, add interactivity by subscribing to events, and coding the corresponding callbacks

#### 4. Detailed guidelines

One possible way to model your components in this App is the following:

![Components](https://raw.githubusercontent.com/lewagon/react-redux-images/master/react/components.png)

In order to fake a database of flats, you can create a `data` folder in your app with a `flats.js` file containing:

...

You can then import it in the right component!

This will also give you hints on the props you need to model your flat component ;)

#### 5. Map

To display a map you can look into [this package](https://github.com/istarkov/google-map-react) which is quite handy when you wand to add your own components and display them on the map (for instance you can code your own `Marker` component to display the selected flat on the map).

#### 6. UI component

For our Flat component, we used the following markup:
```html
<div class="card" style="background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg';);">
  <div class="card-category">150 EUR</div>
  <div class="card-description">
    <h2>Super 60m2 in trendy neighborhood!</h2>
  </div>
  <a class="card-link" href="#"></a>
</div>
```

and the following css:
...
