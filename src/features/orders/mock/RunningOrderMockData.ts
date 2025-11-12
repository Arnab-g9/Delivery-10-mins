export interface IrunningOrderMockdataTypes {
    deliveryId: string,
    type: string,
    date: string,
    time: string,
    isPercel?: boolean 
}

export const runningOrderMockData : IrunningOrderMockdataTypes[] = [
    {
    deliveryId: "#100070",
    type: "Gifts",
    date: "25 Sep 2023",
    time: "11:04 AM",
    isPercel: true,
  },
  {
    deliveryId: "#100071",
    type: "Groceries",
    date: "26 Sep 2023",
    time: "02:15 PM",
    isPercel: false,
  },
  {
    deliveryId: "#100072",
    type: "Electronics",
    date: "27 Sep 2023",
    time: "09:45 AM",
    isPercel: true,
  },
  {
    deliveryId: "#100073",
    type: "Clothing",
    date: "28 Sep 2023",
    time: "01:30 PM",
  },
  {
    deliveryId: "#100074",
    type: "Medicines",
    date: "29 Sep 2023",
    time: "10:10 AM",
    isPercel: true,
  },
  {
    deliveryId: "#100075",
    type: "Books",
    date: "30 Sep 2023",
    time: "04:55 PM",
    isPercel: false,
  },
  {
    deliveryId: "#100076",
    type: "Food Delivery",
    date: "01 Oct 2023",
    time: "07:20 PM",
  },
  {
    deliveryId: "#100077",
    type: "Documents",
    date: "02 Oct 2023",
    time: "08:00 AM",
    isPercel: true,
  },
  {
    deliveryId: "#100078",
    type: "Stationery",
    date: "03 Oct 2023",
    time: "03:40 PM",
  },
  {
    deliveryId: "#100079",
    type: "Furniture",
    date: "04 Oct 2023",
    time: "12:10 PM",
    isPercel: true,
  },
]