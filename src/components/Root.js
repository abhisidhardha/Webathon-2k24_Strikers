import { createBrowserRouter,RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Proceed from "./Proceed";
function Root(){
    let router = createBrowserRouter([
        {
            path:'',
            element:<RootLayout/>,
            children:[
            {
                path:'',
                element:<Home/>
            },
            {
                path:'proceed',
                element:<Proceed/>,
                children:[
                    {
                        path:'register',
                        element:<Register/>
               
                    },
                    {
                        path:'login',
                        element:<Login/>
                    }
                    ]
            },
            ]
        }
        
    ])
    return(
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}
export default Root 