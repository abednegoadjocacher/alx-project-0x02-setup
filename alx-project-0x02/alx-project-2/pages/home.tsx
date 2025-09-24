import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
export default function HomePage() {
  return (
    <>
        <Header />
        <h1 className="text-center h-min text-red-500">
          Welcome to Home page 
        </h1>
        <Card
        title="BMW"
        content="This is BMW" />

        <Card
        title="AirbnB"
        content="This is airbnb" />
    </>
  );
}
