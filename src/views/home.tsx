import { Link } from "react-router-dom";
import HomeBanner from "../assets/pic/HomeBanner.png";
import Coffee01 from "../assets/pic/Coffee01.jpg"
import Coffee02 from "../assets/pic/Coffee02.jpg"
import Coffee03 from "../assets/pic/Coffee03.jpg"

export default function Home() {
  return (
    <div className="">
      <img className="my-6 rounded-md" src={HomeBanner} />
      <p className="font-bold text-[40px] mb-4">NOW TRENDING</p>
      <div className="flex justify-center items-center">
        <div className=" grid grid-cols-3 gap-10">
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src={Coffee01}
                alt="Coffee01"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Coffee01</h2>
              <p>WWAPortal</p>
              <div className="card-actions justify-end">
                <Link to={`/show/1`} className="btn btn-primary">
                  View more...
                </Link>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src={Coffee02}
                alt="Coffee02"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Coffee02</h2>
              <p>Roots</p>
              <div className="card-actions justify-end">
                <Link to={`/show/2`} className="btn btn-primary">
                  View more...
                </Link>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src={Coffee03}
                alt="Coffee03"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Coffee03</h2>
              <p>Simiao Kafei</p>
              <div className="card-actions justify-end">
                <Link to={`/show/3`} className="btn btn-primary">
                  View more...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
