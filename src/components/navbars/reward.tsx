import { useState, useEffect } from "react";

export default function RewardedAd() {
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const loadGoogleTagScript = () => {
      // Tạo thẻ script mới
      const script = document.createElement("script");
      script.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
      script.async = true;

      // Xử lý sau khi script đã được tải xong
      script.onload = () => {
        const googletag = (window as any).googletag || { cmd: [] };
        googletag.cmd.push(() => {
          // Kiểm tra xem đã hiển thị rewarded ad cho người dùng này chưa
          const hasShownRewardedAd = localStorage.getItem("hasShownRewardedAd");
          const currentTime = Date.now();

          if (
            !hasShownRewardedAd ||
            currentTime - parseInt(hasShownRewardedAd, 10) > 10 * 60 * 1000
          ) {
            // Nếu chưa hiển thị hoặc đã quá 10 phút, tiếp tục xử lý
            const rewardedSlot = googletag
              .defineOutOfPageSlot(
                "/23201474937/newspaper.livextop.com/newspaper.livextop.com_rewarded",
                googletag.enums.OutOfPageFormat.REWARDED
              )
              .addService(googletag.pubads());
            rewardedSlot.setForceSafeFrame(true);
            googletag.pubads().enableAsyncRendering();
            googletag.enableServices();

            const showRewardedAd = () => {
              const trigger = document.getElementById("rewardModal");
              if (trigger)
                trigger.style.display = "block";

              googletag.pubads().addEventListener("impressionViewable", () => {
                // Sự kiện khi impressions được hiển thị
                console.log("Impression viewable!");
              });

              googletag
                .pubads()
                .addEventListener("slotRenderEnded", (event: any) => {
                  // Sự kiện khi quảng cáo kết thúc hiển thị
                  if (event.isEmpty) {
                    console.log("Ad is empty or failed to load");
                    // Ẩn modal nếu quảng cáo không thành công
                    setTimeout(() => {
                      const trigger = document.getElementById("rewardModal");
                      if (trigger)
                        trigger.style.display = "none";
                    }, 3000); // Thời gian chờ 3 giây trước khi ẩn modal
                  }
                });

              googletag
                .pubads()
                .addEventListener("rewardedSlotReady", (evt: any) => {
                  evt.makeRewardedVisible();
                });

              googletag
                .pubads()
                .addEventListener("rewardedSlotClosed", (evt: any) => {
                  // Ẩn modal sau khi người dùng tắt rewarded ad
                  console.log("onclosed")
                  const trigger = document.getElementById("rewardModal");
                  if (trigger)
                    trigger.style.display = "none";
                  // Lưu thông tin đã hiển thị quảng cáo
                  localStorage.setItem(
                    "hasShownRewardedAd",
                    currentTime.toString()
                  );
                });

              googletag.display(rewardedSlot);
            };

            // Hiển thị quảng cáo khi trang web được tải
            showRewardedAd();
          }
          else {
            const trigger = document.getElementById("rewardModal");
            if (trigger)
              trigger.style.display = "none";
          }
        });
      };

      // Thêm thẻ script vào thẻ <head>
      document.head.appendChild(script);
    };

    //
    const trigger = document.getElementById("rewardModal");
    if (trigger)
      trigger.style.display = "none";

    // Gọi hàm load script khi component được mount
    loadGoogleTagScript();
  }, []);

  return (
    <>
      <div id="rewardModal" className="modal">
        <div className="modal-content"></div>
      </div>

      <style jsx>{`
        .modal {
          display: block;
          position: fixed;
          z-index: 1;
          padding-top: 300px;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }

        .modal-content {
          margin: auto;
          padding: 25px;
          text-align: center;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        @media all and (orientation: landscape) {
          .modal-content {
            top: 60%;
          }
        }

        .btn {
          padding: 0.5rem;
          background: #2990ea;
          border: none;
          border-radius: 4px;
          margin: 4px;
          color: white;
        }
      `}</style>
    </>
  );
}
