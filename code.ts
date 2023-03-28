figma.showUI(__html__);

const pageNames = [
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
  " ------------------------------------------- ",
  "Credits"
];

async function createPages(includeDesignPrinciples: boolean) {
  try {
    // Rename default page to "Start Here"
    figma.currentPage.name = "Start Here";

    for (let i = 0; i < pageNames.length; i++) {
      const pageName = pageNames[i];
      const page = figma.createPage();
      page.name = pageName;
    }

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
  const pageNames = ["Design Principle 1", "Design Principle 2", "Design Principle 3", "Design Principle 1"];
  for (let i = 0; i < pageNames.length; i++) {
    const pageName = pageNames[i];
    const page = figma.createPage();
    page.name = pageName;
  }
}

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
