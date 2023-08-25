document.addEventListener("DOMContentLoaded", () => {
  let timeline1 = new TimelineMax();
  timeline1
    .from(".title", 1.5, {
      y: 200,
      ease: Power3.easeInOut,
    })
    .from(
      "nav",
      1.5,
      {
        y: 30,
        autoAlpha: 0,
        ease: Power3.easeInOut,
      },
      "-=1"
    )
    .from(
      ".sub-title",
      1.5,
      {
        y: 30,
        autoAlpha: 0,
        ease: Power3.easeInOut,
      },
      "-=1"
    )
    .from(
      ".bottom-nav",
      1.5,
      {
        width: "0%",
        autoAlpha: 0,
        ease: Power3.easeInOut,
      },
      "-=1"
    );

  const nav = document.getElementById("bottom-nav");
  nav.addEventListener("click", () => {
    let timelime2 = new TimelineMax();
    timelime2
      .set(".grid", {
        display: "grid",
      })
      .to(".forest img", 2, {
        y: -500,
        scale: 1.1,
        ease: Expo.easeIn,
      })
      .to(
        "bg-image",
        2,
        {
          y: -600,
          ease: Expo.easeIn,
        },
        "-=3"
      )
      .to(
        ".sub-title",
        2,
        {
          autoAlpha: 0,
          y: -100,
          ease: Expo.easeIn,
        },
        "-=3"
      )
      .to(
        ".bottom-nav",
        2,
        {
          width: "0%",
          ease: Expo.easeIn,
        },
        "-=3"
      )
      .to(
        "nav",
        2,
        {
          color: "#fff",
        },
        "-=3"
      )
      .to(
        ".imgs",
        2,
        {
          height: "100%",
          ease: Expo.easeIn,
        },
        "-=2"
      )
      .to(
        ".imgs-2",
        2,
        {
          height: "100%",
          ease: Expo.easeIn,
        },
        "-=2"
      )
      .to(
        ".imgs-3",
        2,
        {
          height: "100%",
          ease: Expo.easeIn,
        },
        "-=1.9"
      )
      .to(
        ".imgs-4",
        2,
        {
          height: "100%",
          ease: Expo.easeIn,
        },
        "-=1.8"
      );
  });
});
