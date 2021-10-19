# BW POTLUCK 10/2021 BACKEND 

##  https://bw-potluck-102021.herokuapp.com/



### ----------------  ENDPOINTS  -------------------- 

### **-----LOGIN and REGISTER-----**

### [POST] /api/auth/register  -- creates a new user

<details>
    <summary>WHAT TO SEND </summary>

```JSON
{
    "username": "string",
    "password": "string"
}
```
</details>

<details>
    <summary>WHAT YOU GET BACK</summary>

```JSON
{
    "username": "string",
    "user_id": "integer"
}
```
</details>


### [POST] /api/auth/login  -- logs in an existing user
<details>
    <summary> WHAT TO SEND </summary>

```JSON
{
    "username": "string",
    "password": "string"
}
```
</details>
<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
{
    "message": "Welcome back username",
    "user_id": "integer",
    "username": "username",
    "token": "TOKEN"
}
```
</details>

## **-----USERS-----**

### [GET] /api/users  -- gets list of users

<details>
     <summary>WHAT YOU GET BACK</summary>

```JSON
[
    {
        "user_id": 1,
        "username": "name1"
    },
    {
        "user_id": 2,
        "username": "name2"
    },
    {
        "user_id": 3,
        "username": "name3"
    }
]
```
</details>

### [GET] /api/users/:id  -- gets user by ID

<details>
     <summary>WHAT YOU GET BACK</summary>

```JSON
{
    "user_id": 1,
    "username": "name1"
}
```
</details>

### [GET] /api/users/:id/potlucks  -- gets all the potlucks a user has been invited to 

<details>
     <summary>WHAT YOU GET BACK</summary>

```JSON
{
    "user_id": "1",
    "username": "name1",
    "potlucks": [
        {
            "attending": 1,
            "potluck_id": 3,
            "potluck_name": "PotLuck Name you Created",
            "organizer": "req.body of the name you submitted",
            "potluck_description": "the description of the potluck gathering",
            "potluck_date": "2021-10-28P06:00:00.000Z",
            "potluck_time": "08:30:00",
            "potluck_location": "1817 Some address you submitted, Wi. 53024"
        },
        {
            "attending": 1,
            "potluck_id": 2,
            "potluck_name": "Second PotLuck Name you Created",
            "organizer": "name2",
            "potluck_description": "description of the potluck gathering",
            "potluck_date": "2021-10-28P06:00:00.000Z",
            "potluck_time": "06:00:00",
            "potluck_location": "1234 Some other address you submitted, Wi. 53024"
        }
    ]
}
```
</details>

### [GET] /api/users/:organizer_id/organizer_potlucks  -- gets all the potlucks a user has created

<details>
     <summary>WHAT YOU GET BACK</summary>

```JSON
[
    {
        "potluck_id": 3,
        "potluck_name": "PotLuck Name you Created",
        "organizer": 3,
        "details": {
            "potluck_description": "description of the potluck gathering",
            "potluck_date": "2021-10-28P06:00:00.000Z",
            "potluck_time": "08:30:00",
            "potluck_location": "1817 Some address you submitted, Wi. 53024"
        }
    },
    {
        "potluck_id": 2,
        "potluck_name": "Mansfield Family BBQ",
        "organizer": 3,
        "details": {
            "potluck_description": "Everything BBQ",
            "potluck_date": "2021-07-28T06:00:00.000Z",
            "potluck_time": "07:00:00",
            "potluck_location": "1234 Mansfield Street, Grafton, WI. 53024"
        }
    }
]
```
</details>


### [PUT] /api/users/:id  -- edit existing user
<details>
    <summary> WHAT TO SEND </summary>

```JSON
{
    "username": "string",
    "password": "string"
}
```
</details>
<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
{
    "user_id": 1,
    "username": "Mr. Blah"
}
```
</details>

## **-----POTLUCKS-----**

### [GET] /api/potlucks  -- get an array of potlucks

<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
[
    {
        "potluck_id": 3,
        "potluck_name": "PotLuck Name you Created",
        "organizer": 3,
        "details": {
            "potluck_description": "description of the potluck gathering",
            "potluck_date": "2021-10-28P06:00:00.000Z",
            "potluck_time": "08:30:00",
            "potluck_location": "1817 Some address you submitted, Grafton Wi. 53024"
        }
    },
        {
        "potluck_id": 1,
        "potluck_name": "Smith Family Chineese Food Potluck",
        "organizer": 1,
        "potluck_description": "Just bring Oriental Foods",
        "potluck_date": "2021-08-20T06:00:00.000Z",
        "potluck_time": "05:00:00",
        "potluck_location": "3333 N ABC St, Grafton, WI. 53024 "
    },
    {
        "potluck_id": 2,
        "potluck_name": "Mansfield Family BBQ",
        "organizer": 3,
        "details": {
            "potluck_description": "Everything BBQ",
            "potluck_date": "2021-07-28T06:00:00.000Z",
            "potluck_time": "07:00:00",
            "potluck_location": "1234 Mansfield Street, Grafton, WI. 53024"
        }
    }
]
```
</details>

### [GET] /api/potlucks/:id  -- gets potluck by ID

<details>
     <summary>WHAT YOU GET BACK</summary>

```JSON
{
    "potluck_id": 3,
    "potluck_name": "Some Cool Potluck String Name",
    "details": {
        "organizer": "Donald",
        "potluck_description": "Make the Potluck Great Again. LMAO",
        "potluck_date": "2021-10-28P06:00:00.000Z",
        "potluck_time": "07:30:00",
        "potluck_location": "1234 Mansfield Street, Grafton, WI. 53024"
    }
}
```
</details>

### [GET] /api/potlucks/:id/users  -- gets the users for a specific potluck 

<details>
     <summary>WHAT YOU GET BACK</summary>

```JSON
{
    "potluck_id": 2,
    "potluck_name": "Sting Name of the Potluck",
    "details": {
        "organizer": 1,
        "potluck_description": "String of req.body describing the potluck",
        "potluck_date": "2021-10-28P06:00:00.000Z",
        "potluck_time": "05:00:00",
        "potluck_location": "1234 Whateveryouwrote Street, Grafton, WI. 53024"
    },
    "users": [
        {
            "user_id": 4,
            "username": "Santa Klause",
            "attending": "attending"
        },
        {
            "user_id": 3,
            "username": "Ms. Klause",
            "attending": "not attending"
        }
    ]
}
```
</details>

### [GET] /api/potlucks/:id/foods  -- gets the foods for a specific potluck 

<details>
     <summary>WHAT YOU GET BACK</summary>

```JSON
{
    "potluck_id": 3,
    "foods": [
        {
            "food_id": 1,
            "food_name": "Ketchup",
            "food_description": "It's not ordinary ok?!"
        },
        {
            "food_id": 2,
            "food_name": "Fried Rice",
            "food_description": "Ok I cheated and picked it up at the grocery store"
        },
        {
            "food_id": 6,
            "food_name": "Penut Butter",
            "food_description": "chuncky not smooth"
        }
    ]
}
```
</details>

### [POST] /api/potlucks/:id/users  -- adds a user to a potluck
<details>
    <summary> WHAT TO SEND </summary>

```JSON
{
   "potluck_id": 2,
   "user_id": 15,
   "attending": 1 //simple 1 for attending and 0 not-attending
}
```
</details>
<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
{
    "potluck_id": 2,
    "potluck_name": "Coming up with Names is getting old",
    "details": {
        "organizer": 1,
        "potluck_description": "Coming up with Descriptions is getting even older",
        "potluck_date": "2021-10-20P06:00:00.000Z",
        "potluck_time": "05:00:00",
        "potluck_location": "111 Another St. WI. 53024"
    },
    "users": [
        {
            "user_id": 4,
            "username": "Mr. User Name",
            "attending": "attending"
        },
        {
            "user_id": 3,
            "username": "Ms. User Name",
            "attending": "not attending"
        },
        {
            "user_id": 8,
            "username": "Tom Thumb",
            "attending": "attending"
        }
    ]
}
```
</details>

### [POST] /api/potlucks/:id/foods  -- adds a food item to a potluck
<details>
    <summary> WHAT TO SEND </summary>

```JSON
{
    "potluck_id": 3,
    "food_id": 2
}
```
</details>
<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
{
    "potluck_id": 3,
    "foods": [
        {
            "food_id": 1,
            "food_name": "Ketchup",
            "food_description": "It's not ordinary ok?!"
        },
        {
            "food_id": 2,
            "food_name": "Fried Rice",
            "food_description": "Ok I cheated and picked it up at the grocery store"
        },
        {
            "food_id": 6,
            "food_name": "Penut Butter",
            "food_description": "chuncky not smooth"
        }
    ]
}
```
</details>


### [POST] /api/potlucks  -- creates a new potluck
<details>
    <summary> WHAT TO SEND </summary>

```JSON
{
    "potluck_name": "string",
    "potluck_description": "string optional ",
    "potluck_date": "2021-10-08  this format REQUIRED",
    "potluck_time": "12:00:00 this format REQUIRED",
    "potluck_location": "string",
    "organizer": "integer"
}
```
</details>
<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
{
    "potluck_id": 3,
    "potluck_name": "Lambda Graduation Bash",
    "details": {
        "organizer": "Rick Mansfield",
        "potluck_description": "Celebrate Lambda Graduation",
        "potluck_date": "2022-01-2P06:00:00.000Z",
        "potluck_time": "06:30:00",
        "potluck_location": "3214 Party House Way, Graftong WI. 53024"
    }
}
```
</details>

### [PUT] /api/potlucks/:id  -- updates an existing potluck
<details>
    <summary> WHAT TO SEND </summary>

```JSON
{
    "potluck_name": "string",
    "potluck_description": "string optional ",
    "potluck_date": "2021-07-28  this format REQUIRED",
    "potluck_time": "12:00:00 this format REQUIRED",
    "potluck_location": "string",
    "organizer": "integer"

}
```
</details>
<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
{
    "potluck_id": 3,
    "potluck_name": "Lambda Graduation Bash",
    "details":  {
        "organizer": "Rick Mansfield",
        "potluck_description": "Celebrate Lambda Graduation",
        "potluck_date": "2022-01-2P06:00:00.000Z",
        "potluck_time": "06:30:00",
        "potluck_location": "3214 Party House Way, Graftong WI. 53024"
    }
}
```
</details>




### [DELETE] /api/potlucks/:id  -- delete existing potluck

<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
{
    "potluck_id": 3,
    "potluck_name": "Lambda Graduation Bash",
    "details":  {
        "organizer": "Rick Mansfield",
        "potluck_description": "Celebrate Lambda Graduation",
        "potluck_date": "2022-01-2P06:00:00.000Z",
        "potluck_time": "06:30:00",
        "potluck_location": "3214 Party House Way, Graftong WI. 53024"
    }
}
```
</details>

### [DELETE] /api/potlucks/:potluck_food_id/foods  -- delete existing food item in a potluck

<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
"successfully removed item"
```
</details>

## **-----FOODS-----**

### [GET] /api/foods  -- get an array of all foods

<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
[
    {
        "food_id": 1,
        "food_name": "Ketchup",
        "food_description": "It's not ordinary ok?!"
    },
    {
        "food_id": 2,
        "food_name": "Fried Rice",
        "food_description": "Ok I cheated and picked it up at the grocery store"
    },
    {
        "food_id": 6,
        "food_name": "Penut Butter",
        "food_description": "chuncky not smooth"
    }
]
```
</details>

### [GET] /api/foods/:id  -- gets food by ID

<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
{
    "food_id": 1,
    "food_name": "Ketchup",
    "food_description": "It's not ordinary ok?!"
}
```
</details>

### [POST] /api/foods  -- create new food item

<details>
    <summary> WHAT TO SEND </summary>

```JSON
{
    "food_name": "Chips",
    "food_description": "string optional"
}
```
</details>
<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
{
    "food_id": 8,
    "food_name": "Chips",
    "food_description": "description submitted"
}
```
</details>

### [PUT] /api/foods/:id  -- update existing food item

<details>
    <summary> WHAT TO SEND </summary>

```JSON
{
    "food_name": "Pickles",
    "food_description": "string optional"
}
```
</details>
<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
{
    "food_id": 8,
    "food_name": "Pickles",
    "food_description": "description if you subbitted one"
}
```
</details>

### [DELETE] /api/foods/:id  -- delete existing food item

<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
{
    "food_id": 8,
    "food_name": "Name of the deleted food",
    "food_description": "description if one was submitted"
}
```
</details>