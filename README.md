# Remove Facebook Page Likes

JS script that aids in removal of likes from a FB page based on a date range. The script needs to be run within the People and Pages section of the page where the likes need to be removed from. It works by iterating through all the rows being displayed on the screen and selecting the checkbox of the ones that fall between the date range. Note that there is a limit of 500 users you can remove at the same time, so run the script with less than that.

What!? Why!? Well, we, at [WhiteTaleCoffee](https://whitetalecoffee.com) had to deal with a situation where a misguided marketing effort paid for about ~2,500 likes. As we improved our marketing foo, we realized that there were many hidden costs to having paid likes, and it all comes down to these people not being in our psychographic target, nor can we hope to target them in the future. This translated into low performing FB campaigns where money was wasted on people that had no chance of conversion.

All of our purchased likes happened within a limited date range, so 

# How to use it
* Go to the Facebook page that needs the likes removed
* Go to the settings section (i.e. https://www.facebook.com/whitetalecoffee/settings/?tab=settings)
* Click on "People and Other Pages" on the left-nav (i.e. https://www.facebook.com/whitetalecoffee/settings/?tab=people_and_other_pages)
* Scroll down far enough so that you see the likes in question (within the range that you care about)
* Open up the developer tools/console - we recommend Chrome ([more info](https://developer.chrome.com/devtools))
* Copy the script from `clickUserRows.js` and paste into the Console
* You will now have a function on your console you can use with the syntax of clickRows(<number of rows>, <date-from>, <date-to>)
  * example: clickRows(100, 1448662964, 1449120938)
  * The reason the dates are "funky" is because they are in [UTC](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) is because that's how Facebook displays it in code
* Scroll down the Likes until you find the start-from date (most distant date) - use [this tool](http://www.epochconverter.com/) to convert the date on the Like to UTC (don't worry about the minutes), write this date down
* Scroll back up the Likes until you find the start-to date (most recent date) - use the same tool and method as above to convert to UTC
* You're ready to run the script! Use the syntax above to set the max number of rows you want to select (max of 500), the date-from and date-to, double check your entries, and press `Enter` to start it
* You will see activity on your Console, but the page will become inactive - this is normal because we're using up the whole CPU available to display the page
* Once the script finishes you'll have all the users within that range selected, and you can select "Select From Page Likes" on the gear drop-down menu (top right of list)
* Click on the confirmation button, and let the site get back to you - again, we're doing a lot of operations, and it takes some time to remove the likes
* Facebook might give you an error, but when you reload the page the likes will be gone!
* If you need to remove more than 500 users repeat the steps above

# Feature backlog
* Integrate with FB graph to pull information of users to only remove users within particular geographies (or other filters)
* Make the script more user friendly by putting in dates of format `mm/dd/yyyy`

# Credits
Crafted with care by @kevin-wolf through @ScalablePath

# Feedback/Support
Hit us up if you have any questions, and we'll try to answer them. One thing we can promise, though, is to provide you with the best coffee on earth (as long as you live within the USA [as of right now])
