import ChannelIcon from "@material-ui/icons/PersonalVideo";
import UploadIcon from "@material-ui/icons/CloudUpload";
import NotificationIcon from "@material-ui/icons/Notifications";
import SignOutIcon from "@material-ui/icons/ExitToApp";
import GetCoinIcon from "@material-ui/icons/LocalAtm";
import TransferCoinIcon from "@material-ui/icons/TransferWithinAStation";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpIcon from "@material-ui/icons/Help";
import PolicyIcon from "@material-ui/icons/Policy";
import FeedBackIcon from "@material-ui/icons/Feedback";

export default [
  {
    title: "My Channels",
    icon: ChannelIcon,
  },
  {
    title: "Upload Music",
    icon: UploadIcon,
  },
  {
    title: "Notifications",
    icon: NotificationIcon,
  },
  {
    title: "Sign Out",
    icon: SignOutIcon,
    action: () => console.log("signing out"),
  },
  {
    title: "Get Coins",
    icon: GetCoinIcon,
  },
  {
    title: "Transfer Coins",
    icon: TransferCoinIcon,
  },
  {
    title: "Settings",
    icon: SettingsIcon,
  },
  {
    title: "Help",
    icon: HelpIcon,
  },
  {
    title: "Terms & Privacy Policy",
    icon: PolicyIcon,
    link: "/terms-and-privacy-policy",
  },
  {
    title: "Send a Feedback",
    icon: FeedBackIcon,
    action: () => console.log("sending feedback"),
  },
];
