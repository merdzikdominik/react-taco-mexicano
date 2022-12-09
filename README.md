![picture representing the restaurant Application Website](https://github.com/merdzikdominik/react-taco-mexicano/blob/main/src/assets/taco-background.jpg)

Taco Mexicano SPA application written in React.js.

## For development purposes

To install and enable the application on personal computer device, copy&paste the following command: `git clone https://github.com/merdzikdominik/react-taco-mexicano.git`
to your terminal and click enter.

Then head to your `Code Editor` and open a cloned project.

The next step is running `npm i` in your terminal to install all required packages.

The last step is running `npm start`, after performing this command the application will launch on your PC.

## Main purpose

The main purpose of developing this web application was to compare my current Frontend skills with previous projects. I've had very good time writing it, since thanks to this project I could learn more new things related with React. Facing new issues while development also gave me new experience which was invaluable.

## Technical Information

In order to create this application I used React.js as a frontend and Firebase as backend to store user data. I also used Adobe Photoshop CC to create custom textures.

*Dependencies used*
- firebase
- styled-components 💅
- react-paginate
- react-scroll-motion
- react-redux
- redux-persist
- react-router
- framer-motion
- fortawesome

## More about App

The whole project is a Single Page Application and greets us with the slider presenting restaurant goods available in the menu. On the Order Home subpage there is a possibility to order a dish to our home, it's being stored within the cart. In order to purchase the selected dishes, all what needs to be done is to click 'Realizuj zamówienie', user will be redirected to another subpage and will have to fill the purchase form. I wanted to implement a payment gate after filling the purchase form, so I decided to take a look at Stripe gateway, but I didn't use it due to charges I would incur. As I researched another solutions regarding the payment gateway it turned out that all gateways I found required some fees in order to use them, so I didn't add such feature. Ordered stuff is stored in Firebase database. All orders are being persisted even though the user will exit or refresh the page. This ordering feature also has case insensitive filter, so user is allowed to search for the dish even with enabled caps lock. I've put a pagination as well so user will be able to look through the entire menu. All dish data has been stored in JSON format file, and fetched into the menu. The very same data was also used within the static menu on another subpage of the application. App also has a subpage where user is informed on which day the restaurant is open. The last subpage is a google map with the location of the spot, I've put a loading screen to avoid bad user-experience while waiting for the map being loaded. If a user will put invalid sentence into the URL then he will face a page with 'NO PAGE FOUND' message. All pages have smooth transition while switching them, so it looks kind of fancy.

## Screenshots

![picture representing the restaurant Application Website](https://github.com/merdzikdominik/react-taco-mexicano/blob/main/src/assets/welcomepage.png)
![picture representing the restaurant Application Website](https://github.com/merdzikdominik/react-taco-mexicano/blob/main/src/assets/orderhome.PNG)
