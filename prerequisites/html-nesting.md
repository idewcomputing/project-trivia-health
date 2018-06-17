# HTML Nesting

## Hierarchy in HTML

Look at the HTML below. Do you see how the _container_ could be called the **parent** of the three cards? The _cards_ are then **children** of the _container._ This is an example of [**nested HTML**](http://www.developphp.com/lib/HTML/Nesting-and-Indenting)**.**

{% code-tabs %}
{% code-tabs-item title="HTML" %}
```markup
<div class="container">
  <div class="card">Jill - Data Scientist</div>
  <div class="card">Johnny - UX Designer</div>
  <div class="card">Mia - Software Developer</div>
</div>
```
{% endcode-tabs-item %}
{% endcode-tabs %}

{% code-tabs %}
{% code-tabs-item title="CSS" %}
```css
.container {
  border: 1px dotted black;
  padding: 5px;
  background-color: lightyellow;
}
.card {
  padding: 5px;
  margin: 20px;
  background-color: lightgray;
  box-shadow: 2px 2px 3px;
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

### Try it out

1. Copy the HTML and CSS above into a [**new CodePen**](https://codepen.io/pen/). 
2. Notice in the browser preview how the nesting becomes visually apparent.
3. Also, notice how the indentation in the HTML is really helpful to see the proper structure. Technically the indentation does not need to be there, but it is a good programming practice.
4. Add a parent `<div>` element with a class of "outer-container" to the _container_  with a solid border. Use good indentation in your HTML.

