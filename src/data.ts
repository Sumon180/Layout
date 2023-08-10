import { v4 as uuidv4 } from "uuid";

export const menuItems = [
  {
    id: uuidv4(),
    icon: "heroicons-outline:home",
    title: "Dashboard",
    child: [
      {
        childtitle: "Analytics Dashboard",
        childlink: "analytics",
      },
      {
        childtitle: "Ecommerce Dashboard",
        childlink: "ecommerce",
      },
      {
        childtitle: "Project  Dashbaord",
        childlink: "project",
      },
      {
        childtitle: " CRM Dashbaord",
        childlink: "crm",
      },
      {
        childtitle: "Banking Dashboard",
        childlink: "banking",
      },
    ],
  },

  {
    id: uuidv4(),
    icon: "heroicons:presentation-chart-line",
    title: "Analytics",
  },
  {
    id: uuidv4(),
    icon: "heroicons:shopping-cart",
    title: "Ecommerce",
  },
  {
    id: uuidv4(),
    icon: "heroicons-outline:document",
    title: "Project",
  },

  {
    id: uuidv4(),
    icon: "heroicons:arrow-trending-up",
    title: "Changelog",
  },
  {
    id: uuidv4(),
    icon: "heroicons-outline:chat",
    title: "Chat",
  },
  {
    id: uuidv4(),
    icon: "heroicons-outline:mail",
    title: "Email",
  },
  {
    id: uuidv4(),
    icon: "heroicons-outline:view-boards",
    title: "Kanban",
  },
  {
    id: uuidv4(),
    icon: "heroicons-outline:calendar",
    title: "Calender",
  },
  {
    id: uuidv4(),
    icon: "heroicons-outline:clipboard-check",
    title: "Todo",
  },
];
