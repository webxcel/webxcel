import { mdiHome, mdiBell } from "@mdi/js";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  const menu = reactive({
    sidebar: [
      {
        name: "Home",
        path: "home",
        icon: mdiHome,
      },
      {
        name: "Notifications",
        path: "notifications",
        icon: mdiBell,
      },
    ],
    notificationbar: [
      {
        name: "All",
        count: 10,
      },
      {
        name: "Unread",
        count: 6,
      },
    ],
    spaces: [
      {
        name: "Front end",
        path: [
          {
            text: "node1",
            children: [
              { text: "node1-1" },
              { text: "node1-2" },
              { text: "node1-3" },
            ],
          },
          { text: "node2" },
        ],
      },
      {
        name: "Back end",
        path: [
          {
            text: "node1",
            children: [
              { text: "node1-1" },
              { text: "node1-2" },
              { text: "node1-3" },
            ],
          },
          { text: "node2" },
        ],
      },
      {
        name: "Mobile app",
        path: [
          {
            text: "node1",
            children: [
              { text: "node1-1" },
              { text: "node1-2" },
              { text: "node1-3" },
            ],
          },
          { text: "node2" },
        ],
      },
    ],
  });

  return { menu };
});
