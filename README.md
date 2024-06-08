1. *Dynamic Routing*
    Add a unorder list in users, as an startinng point to understand dynamic routing. As:

        <ul className='list-item mt-10 ml-28'>
            <li className='list-disc'>
                <Link to={"/users/1"}> User 1 </Link>
            </li> 
            <li className='list-disc'>
                <Link to={"/users/2"}> User 2 </Link>
            </li> 
            <li className='list-disc'>
                <Link to={"/users/3"}> User 3 </Link>
            </li> 
        </ul>

2. Also, create a new file named Details.jsx in Components folder and write *rafce* in it.

3. Now, we have to create a child route for */users* i.e */users/1* , */users/2* , 
    */users/3*, for that : 

    now here two conditions arise, 
        *Condition 1*  : We want to get to the new route on new page:

        under this condtion we can simply add this in MainRouter.jsx where all routes are defined : 
        *<Route path="/users/:id" element={<Details />} />*

        *Condition 2*  : We want to show data present on different route in the same page:
            
            For this condtion we need to update the */users* route from self closing to opening and closing tag route.

            And, also the above written child route of users will now come under usersopening and closing tag route.This will seem as : 

            *<Route path="/users" element={<Users />} > 
              <Route path="/users/:id" element={<Details />} />
            </Route>*

            Now, we will observe that link is getting changed on click of Link tags under Listed items but, data is not visible to use, for this data we have to use a tag named <Outlet/> in our parent route rendering page.

            We use this Outlet tag to determine that at which place in the whole parent page, we want to render data.

4. Make a back button in details.jsx to get back as we click on it for your easy testing using *Link* tag and direct it using *to* tag to={'/users'} i.e. its parent page.

5. instead of writing */users* everytime in a child route we know that parent Link is 
*/users* hence we can simply use a hook called : *useLocation()*

On Users.jsx page make it console to check its contents.

We can replace */users* from every child route to *pathname* which we are getting from useLocation().

6. Now we want to get the data from params, for that there is a hook name *useParams()*

make it console.log and check it how it works in Details.jsx page.
Now use it as dont forget to import it from react-router-dom
and now initialize it as  : 

    *const {id} = useParams();*

use it as :

    *<div>
        <h1>Details</h1> 
        <h2 className='font-extrabold text-red-800'>{id}</h2>
        <Link className='text-red-500' to={'/users'}> back </Link>
    </div>*