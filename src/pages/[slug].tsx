import { Suspense } from "react";
import Script from "next/script";
import Head from "next/head";
const formatDate = (str: string) => {
  const date = new Date(str);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};
import { useEffect } from 'react';
export default function Page(data: any) {
  const article = data.data;
  //QC Cuoi bai
useEffect(() => {
    const scriptElement = document.createElement("script");
    scriptElement.src = `https://jsc.adskeeper.com/l/i/lifenews.thongtinluat.com.1603526.js?v=${Math.floor(
      Math.random() * 1000
    )}`;
    scriptElement.async = true;

    const scriptContainer = document.getElementById(
      "M936536ScriptRootC1603526"
    );
    if (scriptContainer) {
      scriptContainer.appendChild(scriptElement);
    }

    console.log("scriptElement", scriptElement);

    return () => {
      if (scriptContainer) {
        scriptContainer.removeChild(scriptElement);
      }
    };
  }, []);
  
   useEffect(() => {
     const iframe =  document.querySelector<HTMLIFrameElement>('.content iframe');
    const handleIframeLoad = () => {
      if (iframe) {
        iframe.style.height = '800px'
        iframe.style.width = '100%'
      }
    };

    if (iframe) {
      iframe.addEventListener("load", handleIframeLoad);

      return () => {
        iframe.removeEventListener("load", handleIframeLoad);
      };
    }
    try {
      var qcImgDiv = document.getElementById("qcImg");
 console.log("qcImgDiv",qcImgDiv);
      if (qcImgDiv) {
        var insElement = document.createElement("ins");
        insElement.className = "adsbygoogle";
        insElement.style.display = "block";
        insElement.setAttribute("data-ad-client", "ca-pub-3619133031508264");
        insElement.setAttribute("data-ad-slot", "9137554578");
        insElement.setAttribute("data-ad-format", "auto");
        insElement.setAttribute("data-full-width-responsive", "true");

        // Chèn đối tượng ins vào thẻ div
        qcImgDiv.appendChild(insElement);
      }

       var qcDivqc2 = document.getElementById("qcmgidgb3");
        if(qcDivqc2){
            // Tạo một thẻ div mới để chứa script và amp-embed
            var scriptContainer = document.createElement("div");

            // Tạo thẻ div cho script
            var scriptDiv = document.createElement("div");
            scriptDiv.id = "M936536ScriptRootC1603533";
            scriptContainer.appendChild(scriptDiv);

            // Tạo thẻ script
            var scriptTag = document.createElement("script");
            scriptTag.src = "https://jsc.adskeeper.com/l/i/lifenews.thongtinluat.com.1603533.js";
            scriptTag.async = true;
            //  scriptContainer.appendChild(scriptTag);

            // Chèn scriptContainer vào thẻ div "qc"
            qcDivqc2.appendChild(scriptContainer);
            qcDivqc2.appendChild(scriptTag);
        }
      

      
      
      if (window.innerWidth <= 500) {

        // Giua bai mgid

        // Chọn thẻ div có ID "qc"
        var qcDiv = document.getElementById("qcmgidgb");
        if(qcDiv){
            // Tạo một thẻ div mới để chứa script và amp-embed
            var scriptContainer = document.createElement("div");

            // Tạo thẻ div cho script
            var scriptDiv = document.createElement("div");
            scriptDiv.id = "M936536ScriptRootC1603531";
            scriptContainer.appendChild(scriptDiv);

            // Tạo thẻ script
            var scriptTag = document.createElement("script");
            scriptTag.src = "https://jsc.adskeeper.com/l/i/lifenews.thongtinluat.com.1603531.js";
            scriptTag.async = true;
            //  scriptContainer.appendChild(scriptTag);

            // Chèn scriptContainer vào thẻ div "qc"
            qcDiv.appendChild(scriptContainer);
            qcDiv.appendChild(scriptTag);
            // Chèn đoạn mã AMP
            var ampTag = document.createElement("amp-embed");
            ampTag.setAttribute("width", "600");
            ampTag.setAttribute("height", "600");
            ampTag.setAttribute("layout", "responsive");
            ampTag.setAttribute("type", "mgid");
            ampTag.setAttribute("data-publisher", "vbonews.com");
            ampTag.setAttribute("data-widget", "1569695");
            ampTag.setAttribute("data-container", "M936536ScriptRootC1603531");
            ampTag.setAttribute("data-block-on-consent", "_till_responded");
            scriptContainer.appendChild(ampTag);

            // Chèn scriptContainer vào thẻ div "qc"
            qcDiv.appendChild(scriptContainer);

        }

    }
    //Destop
    else {
        // Giua bai mgid

        // Chọn thẻ div có ID "qc"
        var qcDiv = document.getElementById("qcmgidgb");
        if(qcDiv){
            // Tạo một thẻ div mới để chứa script và amp-embed
            var scriptContainer = document.createElement("div");

            // Tạo thẻ div cho script
            var scriptDiv = document.createElement("div");
            scriptDiv.id = "M936536ScriptRootC1603531";
            scriptContainer.appendChild(scriptDiv);

            // Tạo thẻ script
            var scriptTag = document.createElement("script");
            scriptTag.src = "https://jsc.adskeeper.com/l/i/lifenews.thongtinluat.com.1603531.js";
            scriptTag.async = true;
            //  scriptContainer.appendChild(scriptTag);

            // Chèn scriptContainer vào thẻ div "qc"
            qcDiv.appendChild(scriptContainer);
            qcDiv.appendChild(scriptTag);
            // Chèn đoạn mã AMP
            var ampTag = document.createElement("amp-embed");
            ampTag.setAttribute("width", "600");
            ampTag.setAttribute("height", "600");
            ampTag.setAttribute("layout", "responsive");
            ampTag.setAttribute("type", "mgid");
            ampTag.setAttribute("data-publisher", "vbonews.com");
            ampTag.setAttribute("data-widget", "1569695");
            ampTag.setAttribute("data-container", "M936536ScriptRootC1603531");
            ampTag.setAttribute("data-block-on-consent", "_till_responded");
            scriptContainer.appendChild(ampTag);

            // Chèn scriptContainer vào thẻ div "qc"
            qcDiv.appendChild(scriptContainer);

        }
    }
      // push ads

      var ads = document.getElementsByClassName("adsbygoogle").length;
      console.log("ads",ads);
      for (var i = 0; i < ads; i++) {
        ((window as any).adsbygoogle =
          (window as any)?.adsbygoogle || [])?.push({});
      }
    } catch (err) {
      console.log("err2222");
    }
  }, []);
  return (
    <>
      <Head>
        <title>{article.name+"-"+article.userCode}</title>
        <meta property="og:image" content={article.avatarLink} />
        <meta property="og:title" content={article.name+"-"+article.userCode} />
      </Head>
      <Script id="gg-1" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-72SHJS34XH`} />
      <Script id="gg-2" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-72SHJS34XH');
        `}
      </Script>
     <Script
  id="adsbygoogle-init"
  strategy="afterInteractive"
  crossOrigin="anonymous"
  src= "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8079422152195086"/>
      <main>
{/*         <Script src="/qcscript.js" /> */}
        <div className="container-flu details">
          <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3619133031508264"
                    crossOrigin="anonymous"
                  ></script>
                 <ins
                className="adsbygoogle"    
               style={{ display: 'block' }}
               data-ad-client="ca-pub-3619133031508264"
               data-ad-slot="1236418798"
               data-ad-format="auto"
               data-full-width-responsive="true"
              />
          
               
          <h1>{article.name}</h1>  
          <p className="mb-4 text-lg">
            Posted: {formatDate(article.dateTimeStart)}
          </p>
           <div id="player_dev">
             <script async  src="https://nexvelar.digital/dist/dev_player.js?site=e4888f15-4883-4eb9-82de-269edba64112"></script>
          </div>
          <Suspense fallback={<p>Loading ...</p>}>
            <article
              className="content"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </Suspense>
        </div>
              <div id="M936536ScriptRootC1603526"></div>
        {/*<script      src="https://jsc.adskeeper.com/l/i/lifenews.thongtinluat.com.1578542.js"          async        ></script>*/}
      </main>
    </>
  );
}


export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: { params: any }) {
  try {
    const slug = params?.slug;
    const response = await fetch(
      `${process.env.APP_API}/News/news-detail?id=${slug?.slice(
        slug?.lastIndexOf("-") + 1
      )}`,
    ).then((res) => res.json());
    return {
      props: { data: response.data },
      revalidate: 360000
    };
  } catch (error) {
    return {
      props: { data: {} },
    };
  }
}
