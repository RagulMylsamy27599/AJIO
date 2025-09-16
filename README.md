# AJIO Clone - E-commerce Fashion Store

A modern, responsive e-commerce application built with React, Redux Toolkit, and Tailwind CSS, inspired by AJIO's design and functionality.

## 🚀 Features

### Core Functionality

- **Product Browsing**: Browse products by categories (Men, Women, Kids, Beauty)
- **Product Details**: Detailed product view with size selection and pricing
- **Shopping Cart**: Add/remove items with quantity management
- **Search & Filter**: Search products and apply filters
- **Responsive Design**: Mobile-first responsive design
- **Online/Offline Detection**: Graceful handling of network status

### Enhanced Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Loading States**: Beautiful shimmer loading animations
- **Error Handling**: Comprehensive error boundaries and user-friendly error messages
- **Performance Optimized**: Memoized components and efficient rendering
- **Accessibility**: Proper alt tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Build Tool**: Parcel
- **Icons**: Heroicons, Custom Icons

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/RagulMylsamy27599/AJIO.git
cd AJIO
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Build for production:

```bash
npm run build
```

## 🏗️ Project Structure

```
src/
├── Components/
│   ├── App.js              # Main app component with routing
│   ├── Header.js           # Navigation header
│   ├── Home.js             # Home page with carousels
│   ├── Content.js          # Product listing page
│   ├── DressDetail.js      # Product detail page
│   ├── DressCard.js        # Product card component
│   ├── CartContent.js       # Shopping cart page
│   ├── CartItem.js         # Individual cart item
│   ├── CartIcon.js         # Cart icon with badge
│   ├── Carousal.js         # Image carousel component
│   ├── Shimmer.js          # Loading skeleton
│   ├── Error.js            # Error boundary component
│   └── ...
├── Utils/
│   ├── AppStore.js         # Redux store configuration
│   ├── cartSlice.js        # Cart state management
│   ├── constant.js         # App constants and URLs
│   └── ...
└── Styles/
    └── index.css           # Global styles
```

## 🎨 Key Components

### State Management

- **Redux Store**: Centralized state management for cart and user data
- **Cart Slice**: Handles add/remove/clear cart operations
- **Context API**: Used for component communication

### UI Components

- **Responsive Header**: Mobile-friendly navigation with category links
- **Product Cards**: Hover effects and bestseller badges
- **Shopping Cart**: Real-time updates with price calculations
- **Loading States**: Skeleton screens for better UX

## 🔧 Recent Improvements

### Bug Fixes

- ✅ Fixed missing alt attributes for accessibility
- ✅ Corrected comparison operators (=== instead of ==)
- ✅ Fixed typo in "Platform Fee"
- ✅ Improved empty cart message
- ✅ Added missing exports in cart slice

### Enhancements

- ✅ Modern, responsive design with Tailwind CSS
- ✅ Improved loading states with animated skeletons
- ✅ Enhanced error handling with user-friendly messages
- ✅ Added clear cart functionality
- ✅ Optimized performance with React.memo
- ✅ Better mobile responsiveness
- ✅ Smooth hover animations and transitions

## 🎯 Performance Optimizations

- **React.memo**: Prevents unnecessary re-renders of product cards
- **Lazy Loading**: Code splitting for better initial load time
- **Efficient State Updates**: Optimized Redux actions
- **Image Optimization**: Proper image sizing and alt attributes

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:

- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Deployment

The application can be deployed to any static hosting service:

1. Build the project:

```bash
npm run build
```

2. Deploy the `dist` folder to your hosting service (Netlify, Vercel, GitHub Pages, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ragul Mylsamy**

- GitHub: [@RagulMylsamy27599](https://github.com/RagulMylsamy27599)
- Email: ragulmylsamy27599@gmail.com

## 🙏 Acknowledgments

- AJIO for design inspiration
- React and Redux communities for excellent documentation
- Tailwind CSS for the utility-first CSS framework

---

⭐ If you found this project helpful, please give it a star!
