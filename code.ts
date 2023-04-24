figma.showUI(__html__);

const pageNames = ["📄 Project Info",
  " ------------------------------------------- ", "🥾 Kick off Collab", " ------------------------------------------- ", "Iteration 1", " ------------------------------------------- ", "🤝 Handover", " - 🚀 Launch  (Android)", " - 🚀 Launch  (Web)", " - ⛔️ Error Mapping", " - ℹ️ Help Centre Mapping", " ------------------------------------------- ", "🎠 Playground", " - ✍️ UX Writing", " - 🎠 Features", " ------------------------------------------- ", "Credits", " ------------------------------------------- ",];

async function createPages(includeDesignPrinciples: boolean) {
  try {
    // Rename default page to "Start Here"
    figma.currentPage.name = "Start Here";

    for (let i = 0; i < pageNames.length; i++) {
      const pageName = pageNames[i];
      const page = figma.createPage();
      page.name = pageName;

      // Add a frame to the page
      const frame = figma.createFrame();
      frame.name = 'Frame';
      frame.resize(800, 600); // set frame size as per your requirement
      page.appendChild(frame);
    }

    // Put text layer function here


    if (includeDesignPrinciples) {
      createDesignPrinciplesPages();
    }
  } catch (err) {
    console.error(err);
  } finally {
    figma.closePlugin();
  }
}

function createDesignPrinciplesPages() {
  const pageNames = ["Design Principles:", "Human", "Trustworthy", "Simple", "Inclusive"];
  for (let i = 0; i < pageNames.length; i++) {
    const pageName = pageNames[i];
    const page = figma.createPage();
    page.name = pageName;

    // Add a frame to the page
    const frame = figma.createFrame();
    frame.name = 'Frame';
    frame.resize(800, 600); // set frame size as per your requirement
    page.appendChild(frame);
  }
}

// Next come the functions that handle text on a frame
const textLayerNames = [
  "📄 Project Info",
  " ------------------------------------------- ",
  "🥾 Kick off Collab",
  " ------------------------------------------- ",
  "Iteration 1",
  " ------------------------------------------- ",
  "🤝 Handover",
  " - 🚀 Launch  (Android)",
  " - 🚀 Launch  (Web)",
  " - ⛔️ Error Mapping",
  " - ℹ️ Help Centre Mapping",
  " ------------------------------------------- ",
  "🎠 Playground",
  " - ✍️ UX Writing",
  " - 🎠 Features",
  " ------------------------------------------- ", "Credits", " ------------------------------------------- ",];




function cancel() {
  figma.closePlugin();
}

figma.ui.onmessage = (msg: { type: string, includeDesignPrinciples?: boolean }) => {
  if (msg.type === 'create-pages') {
    createPages(msg.includeDesignPrinciples || false);
  } else if (msg.type === 'cancel') {
    cancel();
  }
};
