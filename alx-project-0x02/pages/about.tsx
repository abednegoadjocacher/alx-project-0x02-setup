import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";
export default function AboutPage(){
    return(
            <>
                <Header />
                <h1 className="text-blue-500 text-center h-min">
                    Welcome to About Page
                </h1>

                <Button title="Small Button" styles="rounded-sm" />
                <Button title="Medium Button" styles="rounded-md" />
                <Button title="Large Button" styles="rounded-full" />
            </>
    );
}