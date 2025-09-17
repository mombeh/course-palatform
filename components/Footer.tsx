// /components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-100 text-center py-6 mt-16">
        <p className="text-gray-600">
          © {new Date().getFullYear()} CourseHub. All rights reserved.
        </p>
      </footer>
    );
  }
  