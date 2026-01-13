# Next.js Playwright Form Components Demo

A modern web application built with Next.js and Playwright that demonstrates various form components with a complete authentication flow, header, and footer.

## Overview

This project showcases a collection of reusable form components including SearchBox, RadioButton, Checkbox, Dropdown, FileUpload, FileDownload, and Popup. It also includes a fully functional login page with form validation and error handling.

## Features

- **Form Components Demo**: Interactive demonstration of 7 different form components
- **Authentication Page**: Complete login flow with username and password validation
- **API Integration Page**: Display external API data with error handling and loading states
- **Header Navigation**: Sticky header with app branding, API, and login buttons
- **Footer**: Multi-column footer with quick links and contact information
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **Form Validation**: Real-time validation with error messages on the login page
- **Testing**: Playwright tests for end-to-end testing and file download verification

## Tech Stack

- **Framework**: Next.js 16.1.1
- **Runtime**: React 19.2.3
- **Styling**: Tailwind CSS 4
- **Testing**: Playwright 1.57.0
- **Language**: TypeScript 5
- **Package Manager**: npm

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Checkbox.tsx
│   │   ├── Dropdown.tsx
│   │   ├── FileDownload.tsx
│   │   ├── FileUpload.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Popup.tsx
│   │   ├── RadioButton.tsx
│   │   └── SearchBox.tsx
│   ├── api/
│   │   └── page.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── ...
tests/
├── components.spec.ts
├── login.spec.ts
public/
package.json
next.config.ts
tsconfig.json
playwright.config.ts
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vijayravindran90/nextjs-playwright.git
cd nextjs-playwright
```

2. Install dependencies:
```bash
npm install
```

### Running the Development Server

Start the development server:
```bash
npm run dev
```

The application will be available at:
- **Home Page**: http://localhost:3001/nextjs-playwright
- **API Page**: http://localhost:3001/nextjs-playwright/api (fetches from https://api.predic8.de/shop/v2/products/8)
- **Login Page**: http://localhost:3001/nextjs-playwright/login

### Building for Production

Build the application:
```bash
npm run build
```

### Running Tests

Execute Playwright tests:
```bash
npm run test
```

## Routes

- `/` - Root path (redirects to `/nextjs-playwright`)
- `/nextjs-playwright` - Home page with form components demo
- `/nextjs-playwright/api` - API integration page that displays external product data
- `/nextjs-playwright/login` - Login page

## Components

### Form Components

1. **SearchBox** - Search input with filtering capability
2. **RadioButton** - Radio button selection component
3. **Checkbox** - Multiple checkbox options
4. **Dropdown** - Select dropdown component
5. **FileUpload** - File upload functionality
6. **FileDownload** - File download functionality
7. **Popup** - Modal popup component

### Layout Components

- **Header** - Navigation header with API and login buttons
- **Footer** - Footer with quick links (Home, API, Login, About) and contact information

## Login Page Features

- Username and password input fields
- Real-time form validation
- Error messages display:
  - "Username is required" when username is empty
  - "Password is required" when password is empty
- Visual feedback with red borders on error fields
- Sign In button with form submission
- Back to Home link

## API Page Features

- Fetches product data from external API (https://api.predic8.de/shop/v2/products/8)
- Loading state indicator while fetching data
- Error handling with user-friendly error messages
- Displays full JSON response in a formatted code block
- Shows extracted product fields (name, price, description) when available
- Dark-themed code block for better readability

## Configuration

### Next.js Configuration

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/nextjs-playwright',
  images: {
    unoptimized: true,
  },
};
```

- **output**: Static export mode
- **basePath**: `/nextjs-playwright` - All routes are prefixed with this path
- **images**: Unoptimized for static export

## Styling

The project uses Tailwind CSS for styling with:
- Responsive design using Tailwind breakpoints
- Custom color scheme (indigo and gray palette)
- Utility-first CSS approach

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- ESLint for code linting
- React best practices and hooks

## Testing

### Playwright Tests

Tests are located in the `tests/` directory:

- `components.spec.ts` - Tests for form components including:
  - SearchBox component
  - RadioButton component
  - Checkbox component
  - Dropdown component
  - FileDownload component (with file existence verification)
- `login.spec.ts` - Tests for login page functionality

**File Download Testing**:
The FileDownload test demonstrates how to verify downloaded files:
```typescript
const downloadPromise = page.waitForEvent('download');
await page.getByRole('button', { name: 'Download Sample File' }).click();
const download = await downloadPromise;
const filePath = path.join('./downloads', 'sample-file.txt');
await download.saveAs(filePath);
expect(fs.existsSync(filePath)).toBeTruthy();
```

Run tests with:
```bash
npm run test
```

## Deployment

The project is configured for static export with the basePath `/nextjs-playwright`. It can be deployed to:
- GitHub Pages
- Vercel
- Any static hosting service
- Traditional web servers (Apache, Nginx, etc.)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is part of the nextjs-playwright repository.

## Author

Vijay Ravindran (vijayravindran90)

## Support

For issues and questions, please visit the GitHub repository or create an issue in the project.
