import React from 'react';
import Sport from './Sport.jpg';

const content = {newsContent: "Pakistan, Australia will conduct practice sessions on Wednesday..DUBAI (Dunya News) – Pakistan and Australia cricket teams will conduct practice sessions for the upcoming one-day international "};

function Handler(props) {
        {/*switch (props.name) {
            case 'table': return <Table />;
            case 'list':  return <List />;
            case 'content': return content.newsContent;
            case 'image': return <ImageHandler />;
        };*/}
        return(
            <div className={props.name}>
                {props.nmae == "table" && <Table />
                 || props.name == "list" && <List />
                 || props.name == "content" && content.newsContent
                 || props.name == "image" && <ImageHandler />
                }
            </div>
        );
        
};

function Div(props) {
    return(
        <div className={props.name}>
            <Handler name={props.name} />
        </div>
    );
};

function List() {
    return(
        <ul>
            <li>Sports</li>
            <li>Wheather</li>
            <li>Politics</li>
        </ul>   
    );
};

function ImageHandler(props) {
    return(
        <img src={Sport} alt={props.name} title={props.name} />
    );
}
    
function TableBody() {
    return(
        <tbody>
            <tr>
                <td>Jill</td>
                <td>Smith</td>
                <td>50</td>
            </tr>
            <tr>
                <td>Eve</td>
                <td>Jackson</td>
                <td>94</td>
            </tr>
            <tr>
                <td>John</td>
                <td>Doe</td>
                <td>80</td>
            </tr>
        </tbody>
    );
};

function TableHeader() {
    return(
        <thead>
            <tr>
                <th>First Namr </th>
                <th>Last Name </th>
                <th> Age </th>
            </tr>
        </thead>
    );;
};

function Table() {
    return(
        <table>
            <TableHeader />
            <TableBody />
        </table>
    );
};

function Body() {
    return (
        <div className="body">
            <Handler name="table" />
            <Handler name="list" />
            <Handler name="content" />
            <Handler name="image" />
            
        </div>
        
    );
}

export default Body;