// const columns = ["Name", "Company", "City", "State"];
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import API from "../services/common";
import { toast } from "react-hot-toast";

export const productTableHeader = [
    {
        name: "productImage",
        label: "Product Image",
        options: {
            customBodyRender: (value) => {
                console.log(value)
                return <img className="tableImage" src={value} alt="Image" width="50" height="50" />;
            },
            filter: false,
            sort: false,
        },
    },
    {
        name: "productName",
        label: "Product Name",
        options: {
            filter: false,
            sort: false,
        }
    },
    {
        name: "productPrice",
        label: "Product Price",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "productCategory",
        label: "Product Category",
        options: {

            filter: true,
            sort: true,

        }
    },
    {
        name: "productInStock",
        label: "Product In Stock",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "action",
        label: "Action",
        options: {
            customBodyRender: (value) => {
                console.log(value)
                return (
                    <div className="actionWrapper">
                        <Link to={`/products`} className="actionBtn">Edit</Link>
                        {/* kk<p className="actionBtn">Edit</p> */}
                        {/* <button  className="actionBtn">Edit</button> */}
                    </div>
                );


            },
            filter: false,
            sort: false,
        }
    }
]