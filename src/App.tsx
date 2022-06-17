import * as React from 'react';
import { Page, Rectangle, Text, Frame } from 'react-figma';

const contextMenuItems = [
  { label: "New Folder" },
  { label: "New File" },
  { label: "Copy", shortcut: "⌘C" },
  { label: "Cut", shortcut: "⌘X" },
  { label: "Copy Path", shortcut: "⌘⇧C" },
  { label: "Copy Relative Path", shortcut: "⌘⌥C" },
  { label: "Rename" },
  { label: "Delete", shortcut: "⌘⌫", warn: true },
]

export const App = () => {
  let menuItems = contextMenuItems.map((item) => {
    return (
      <Frame
        name="ContextMenuItem"
        style={{}}
        layoutMode={'HORIZONTAL'}
        primaryAxisAlignItems="SPACE_BETWEEN"
        primaryAxisSizingMode="AUTO"
      >
        <Text name={item.label} characters={item.label} style={{ color: "#8B8792", fontSize: 14, fontFamily: "Fira Code" }} />
        <Text name={item.shortcut} characters={item.shortcut} style={{ color: "#8B8792", fontSize: 14, fontFamily: "Fira Code" }} />
      </Frame>
    )
  })

  return (
    <Page isCurrent name="ContextMenu">
      <Frame
        name="ContextMenu"
        style={{ width: 160, height: 100, backgroundColor: "#26232A" }}
        layoutMode={'VERTICAL'}
        itemSpacing={2}
      >
        {menuItems}
      </Frame>
    </Page>
  );
};
