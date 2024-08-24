import {scps} from '../data/scp'

function MainContent(props)
{
    
     // Get the ProductID from props
     const {subject} = props;

     // Find the product that matches the ProductID
     const scp = scps.find(s => s.Subject === subject);
 
    return(
        <div className=' p-4 mt-5'>
            <h3>{scp.Subject}</h3>
            <img className="images w-50 " src={"/images/" + scp.Image}  alt="Logo" />
            <h3>{scp.Class}</h3>
            <p className='w-50'>{scp.Description}</p>
            <p className='w-50'>{scp.Containment}</p>
        </div>
       
    );
}

export default MainContent;