import { useParams } from "react-router-dom";
import Coffee01 from "../assets/pic/Coffee01.jpg";
import Coffee02 from "../assets/pic/Coffee02.jpg";
import Coffee03 from "../assets/pic/Coffee03.jpg";
import { Checkbox } from "flowbite-react";

export const ShowDetail = () => {
  const { id } = useParams();
  console.log(id);
  const data = [
    {
      id: 1,
      src: Coffee01,
      type: 1,
      alt: "Coffee01",
      title: "Coffee01",
      text: "WWAPortal",
    },
    {
      id: 2,
      src: Coffee02,
      type: 2,
      alt: "Coffee02",
      title: "Coffee02",
      text: "Roots",
    },
    {
      id: 3,
      src: Coffee03,
      type: 3,
      alt: "Coffee03",
      title: "Coffee03",
      text: "Simiao Kafei",
    },
  ];
  const findData = data.find((da) => da.type === parseInt(id));
  return (
    <div>
      <div className="card bg-base-100 w-full shadow-xl">
        <figure>
          <img src={findData?.src} alt={findData?.alt} />
        </figure>
        <div className="card-body">
          <div className="flex flex-col items-center">
            <button className="btn btn-lg btn-secondary btn-circle mb-2">LIKE!</button>
            <h2 className="card-title">{findData?.title}</h2>
            <p>{findData?.text}</p>
          </div>

          {/* Chat */}
          <div className="border-2 rounded-md h-72 px-4 py-2">
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <div className="chat-header">
                User01
                <time className="text-xs opacity-50">12:45</time>
              </div>
              <div className="chat-bubble">Good place!</div>
            </div>
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <div className="chat-header">
                User02
                <time className="text-xs opacity-50">20:46</time>
              </div>
              <div className="chat-bubble">I love this!</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <div className="chat-header">
                User03
              </div>
              <div className="chat-bubble">
                <input type="text" placeholder="Write something..." className="input input-ghost" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
