﻿// This file defines a list of GUI element types that the WhatsApp Web page uses.
// The list can change in major WhatsApp Web updates. TODO: identify these dynamically based on React elements

var UIClassNames = {};

(function() {

    // Assume by default WhatsApp version 2.3000+, older GUI

    UIClassNames.MENU_ITEM_CLASS = "_ajv7 x1n2onr6 x1okw0bk x5yr21d x14yjl9h xudhj91 x18nykt9 xww2gxu xlkovuz x16j0l1c xyklrzc x1mh8g0r x1anpbxc x18wx58x xo92w5m";
    UIClassNames.MENU_ITEM_HIGHLIGHTED_CLASS = "x1786zcw";

    UIClassNames.OUTER_DROPDOWN_CLASS = "_ak4w"; // outside class of dropdown with "mark as unread"
    UIClassNames.DROPDOWN_CLASS = "_ak5b";
    UIClassNames.DROPDOWN_ENTRY_CLASS = "_aj-r _aj-q _aj-_";
    
    UIClassNames.UNREAD_COUNTER_CLASS = "x18ba5f9"; // the class that sets background-color to var(--unread-marker-background)
    
    UIClassNames.CHAT_PANEL_CLASS = "x14yy4lh"; // the outermost chat panel class (was used in the past for safety delay feature)
    UIClassNames.INNER_CHAT_PANEL_CLASS = "xrmvbpv"; // the innermost chat panel class ('conversation-panel-messages')
    
    UIClassNames.CHAT_ENTRY_CLASS = "x10l6tqk "; // the chat entry in the chats list
    UIClassNames.UNREAD_MARKER_CLASS = "_agtk"; // the "X unread messages" warning inside the chat panel; the class inside the top-level item
    UIClassNames.UNREAD_MARKER_CLASS_2 = "xqhmz9w";
    
    UIClassNames.CHAT_MESSAGE = "messag-in";
    UIClassNames.CHAT_MESSAGE_INNER_TEXT_DIV = "x1lliihq xh8yej3";
    
    
    UIClassNames.TEXT_WRAP_POSITION_CLASS = "_21Ahp";
    // TODO
    UIClassNames.DELETED_MESSAGE_SPAN = "_20bHr";
    UIClassNames.STICKER_MESSAGE_TAG = "_3mPXD";

})();
