# NodeJS DeepDesk API
<p>DeepDesk is a <a href="https://www.deep-desk.com/" rel="nofollow">help desk software</a>  and you can find more information in <a href="https://www.deep-desk.com/api/" rel="nofollow">DeepDesk API Docs</a> </p>

<h2>Installation</h2>
<p>To use it you need to install the node packages. Run this command in the terminal in the lib directory</p>

```bash
npm i
```

<h2> Example </h2>
<P>To start using <a href="https://www.deep-desk.com/" rel="nofollow">Deep Desk API</a> you need edit this form with you credentials </P>

```javascript
    DeepAPI.getInstance()
    .setHost('https://deepdeskhost.net')
    .setToken('token');
```

<h3> Service Operation</h3>

```javascript
//load an existing operation by id
let operation = new Operation();
operation.load(20);

//Edit or create operation parameters
operation.setData("title", "your title");
operation.setData("description" , "your description");
//...
operation.save();

//load Operation collection
operation.getCollection();
await operation.load();
```

<h3>User</h3>

```javascript

//load an existing user by id
let user = new User();
user.load(3);
//...

//load Users collection
let user = (new User()).getCollection();
await user.load();
```

<h3> Filters </h3>

```javascript

//add filters to your research
let user = (new User()).getCollection();
user.addFieldToFilter('name', '%a%', 'like');
await user.load();

```
