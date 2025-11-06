import { Link } from "react-router-dom";
import thumbnail1 from "../assets/thumbnail1.png";
import thumbnail2 from "../assets/thumbnail2.png";
import thumbnail3 from "../assets/thumbnail3.png";
import thumbnail4 from "../assets/thumbnail4.png";
import thumbnail5 from "../assets/thumbnail5.png";
import thumbnail6 from "../assets/thumbnail6.png";
import thumbnail7 from "../assets/thumbnail7.png";
import thumbnail8 from "../assets/thumbnail8.png";

const Feed = ({ sidebar }) => {
  return (
    <div
      className={` ${
        sidebar ? "ml-[15%]" : "ml-[8%]"
      } grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-4 gap-y-7  mt-4  mr-[2%]`}
    >
      <Link to={`video/20/4521`}>
        <img className="w-full rounded" src={thumbnail1} alt="" />
        <h2>best place to go for your vacation</h2>
        <h3 className="text-[14px] font-semibold text-gray-500"> Lalman</h3>
        <p className="text-[14px] text-gray-600">15k views &bull; 5days ago</p>
      </Link>
      <div>
        <img className="w-full rounded" src={thumbnail2} alt="" />
        <h2>best place to go for your vacation</h2>
        <h3 className="text-[14px] font-semibold text-gray-500">Lalman</h3>
        <p className="text-[14px] text-gray-600">15k views &bull; 5days ago</p>
      </div>
      <div>
        <img className="w-full rounded" src={thumbnail3} alt="" />
        <h2>best place to go for your vacation</h2>
        <h3 className="text-[14px] font-semibold text-gray-500">Lalman</h3>
        <p className="text-[14px] text-gray-600">15k views &bull; 5days ago</p>
      </div>
      <div>
        <img className="w-full rounded" src={thumbnail4} alt="" />
        <h2>best place to go for your vacation</h2>
        <h3 className="text-[14px] font-semibold text-gray-500">Lalman</h3>
        <p className="text-[14px] text-gray-600">15k views &bull; 5days ago</p>
      </div>
      <div>
        <img className="w-full rounded" src={thumbnail5} alt="" />
        <h2>best place to go for your vacation</h2>
        <h3 className="text-[14px] font-semibold text-gray-500">Lalman</h3>
        <p className="text-[14px] text-gray-600">15k views &bull; 5days ago</p>
      </div>
      <div>
        <img className="w-full rounded" src={thumbnail6} alt="" />
        <h2>best place to go for your vacation</h2>
        <h3 className="text-[14px] font-semibold text-gray-500">Lalman</h3>
        <p className="text-[14px] text-gray-600">15k views &bull; 5days ago</p>
      </div>
      <div>
        <img className="w-full rounded" src={thumbnail7} alt="" />
        <h2>best place to go for your vacation</h2>
        <h3 className="text-[14px] font-semibold text-gray-500">Lalman</h3>
        <p className="text-[14px] text-gray-600">15k views &bull; 5days ago</p>
      </div>
      <div>
        <img className="w-full rounded" src={thumbnail8} alt="" />
        <h2>best place to go for your vacation</h2>
        <h3 className="text-[14px] font-semibold text-gray-500">Lalman</h3>
        <p className="text-[14px] text-gray-600">15k views &bull; 5days ago</p>
      </div>
      <div>
        <img className="w-full rounded" src={thumbnail1} alt="" />
        <h2>best place to go for your vacation</h2>
        <h3 className="text-[14px] font-semibold text-gray-500"> Lalman</h3>
        <p className="text-[14px] text-gray-600">15k views &bull; 5days ago</p>
      </div>
      <div>
        <img className="w-full rounded" src={thumbnail2} alt="" />
        <h2>best place to go for your vacation</h2>
        <h3 className="text-[14px] font-semibold text-gray-500">Lalman</h3>
        <p className="text-[14px] text-gray-600">15k views &bull; 5days ago</p>
      </div>
      <div>
        <img className="w-full rounded" src={thumbnail3} alt="" />
        <h2>best place to go for your vacation</h2>
        <h3 className="text-[14px] font-semibold text-gray-500">Lalman</h3>
        <p className="text-[14px] text-gray-600">15k views &bull; 5days ago</p>
      </div>
      <div>
        <img className="w-full rounded" src={thumbnail4} alt="" />
        <h2>best place to go for your vacation</h2>
        <h3 className="text-[14px] font-semibold text-gray-500">Lalman</h3>
        <p className="text-[14px] text-gray-600">15k views &bull; 5days ago</p>
      </div>
      <div>
        <img className="w-full rounded" src={thumbnail5} alt="" />
        <h2>best place to go for your vacation</h2>
        <h3 className="text-[14px] font-semibold text-gray-500">Lalman</h3>
        <p className="text-[14px] text-gray-600">15k views &bull; 5days ago</p>
      </div>
      <div>
        <img className="w-full rounded" src={thumbnail6} alt="" />
        <h2>best place to go for your vacation</h2>
        <h3 className="text-[14px] font-semibold text-gray-500">Lalman</h3>
        <p className="text-[14px] text-gray-600">15k views &bull; 5days ago</p>
      </div>
      <div>
        <img className="w-full rounded" src={thumbnail7} alt="" />
        <h2>best place to go for your vacation</h2>
        <h3 className="text-[14px] font-semibold text-gray-500">Lalman</h3>
        <p className="text-[14px] text-gray-600">15k views &bull; 5days ago</p>
      </div>
      <div>
        <img className="w-full rounded" src={thumbnail8} alt="" />
        <h2>best place to go for your vacation</h2>
        <h3 className="text-[14px] font-semibold text-gray-500">Lalman</h3>
        <p className="text-[14px] text-gray-600">15k views &bull; 5days ago</p>
      </div>
    </div>
  );
};

export default Feed;
