import Image from "next/image";
import { GetServerSideProps } from "next";
import axios from "axios";
import React from "react";
import Link from "next/link";

export default function Home(props: any) {
  const { data } = props;
  console.log(data);
  return (
    <div className="container">
      <div className="banner-container">
        <div className="banner-custom">
          <div className="banner">
            <Image
              src="/hinh0.png"
              alt="hinh0"
              className="image-full"
              width={500}
              height={300}
              priority
            />
           
          </div>
        </div>
        <div className="banner-item">
          <div className="banner">
            <Image
              src="/hinh1.png"
              alt="hinh0"
              className="image-full"
              width={500}
              height={300}
              priority
            />
          
          </div>
          <div className="banner">
            <Image
              src="/hinh2.png"
              alt="hinh0"
              className="image-full"
              width={500}
              height={300}
              priority
            />
          
          </div>
          <div className="banner">
            <Image
              src="/hinh3.png"
              alt="hinh0"
              className="image-full"
              width={500}
              height={300}
              priority
            />
          
          </div>
          <div className="banner">
            <Image
              src="/hinh4.png"
              alt="hinh0"
              className="image-full"
              width={500}
              height={300}
              priority
            />
           
          </div>
        </div>
      </div>
      <div className="news-container">
        {data.map((group: any, index: number) => (
          <React.Fragment key={index}>
            <h1>{group.groupName}</h1>
            <div className="news-list">
              {group.detail.map((item: any, idx: number) => (
                <div className="news-item" key={idx}>
                  <Image
                    src={item.avatarLink}
                    alt={item.name}
                    className="image-full"
                    width={300}
                    height={300}
                    priority
                  />
                  <p className="new-title">{item.name}</p>

                  <Link className="read-more" href={`/${item.id}`}>
                    Read more...
                  </Link>
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<any> = async () => {
  try {
    const response = await axios.get(`${process.env.APP_API2}/News/news-list`);
    console.log("response", response);
    return {
      props: { data: response.data.data },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { data: [] as any[] }, // Sử dụng any type cho data
    };
  }
};
