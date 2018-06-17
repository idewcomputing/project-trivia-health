# Using Class and Id

## Target Content with Classes and Id

By assigning a class or id to an HTML element you can apply specific styles in a targeted way.

{% code-tabs %}
{% code-tabs-item title="HTML" %}
```markup
<div class="card" id="jill-card">Jill - Data Scientist</div>
<div class="card">Johnny - UX Designer</div>
<div class="card">Mia - Software Developer</div>
<div>Patrick - Business Analyst</div>
```
{% endcode-tabs-item %}
{% endcode-tabs %}

{% code-tabs %}
{% code-tabs-item title="CSS" %}
```css
.card {
  padding: 5px;
  margin: 20px;
  background-color: lightgray;
  box-shadow: 2px 2px 3px;
}
#jill-card {
  background: yellow;
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

### Try it out

1. Copy the HTML and CSS above and paste it in a [**new CodePen**](https://codepen.io/pen/).
2. Take a look at the browser preview and try to decipher what is going on.
3. Notice how assigning `id="jill-card"` in the HTML allows the element to be "targeted" with the CSS selector `#jill-card`.
4. Notice how assigning `class="card"` in the HTML allows several elements to be "targeted"  with the CSS selector `.card`.
5. Go ahead and give Patrick's text a _class_ of "card" and then add a unique _id_ to his HTML element and some CSS to make his card stand out from all the others. 

{% hint style="warning" %}
**Class** - An HTML class is selected in CSS with a **`#`** prefix and should be used to target a single element on a page.

**ID** - An HTML id is selected in CSS with a `.` prefix and can be used to select several elements that will share a common style.
{% endhint %}

