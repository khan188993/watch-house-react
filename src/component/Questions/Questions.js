import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Question from "./Question/Question";

const QandA =  [
    {no:1,ques:"ReactJS কিভাবে কাজ করে?",ans:"ReactJS হচ্ছে Javascript এর এমন একটি Component Based Library যেটা কোন Web Page কে ছোট ছোট ভাগে কেটে ফেলে এবং Web Page কে বিনা Refresh এ চালাতে পারে।এইটি Website এর কোন Data চেঞ্জ করতে গেলে সম্পুর্ণ Site টি Reload না করে শুধু যে স্থানে Change হইসে সেইটাকে শুধু Re-render করে চেঞ্জ করে যার জন্য সম্পুর্ন Site Reload হয়না। Refresh বিহীন Website কে কাজ করাতে React মুলত একটি Virtual Dom ব্যবহার করে। এই Virual Dom এর ভিতর React  Webpage এর সব কিছু Object আকারে সাজিয়ে রাখে। যখন Webpage এর ডাটায় কোন চেঞ্জ আসে তখন এটা আবার নতুনভাবে আরেকটা Webpage এর Data নিয়ে Object বানায়। এখন যখন Reload করার সময় আসে তখন React তার আগের Object Data এর সাথে নতুন পাওয়া Object ডাটার তুলনা করে এবং শুধুমাত্র যেখানে যেখানে Data Match করবে না সেখানে সেখানে Page কে Re-render করে ডাটা আপডেট করে দেয়।"},
    {no:2,ques:"Props ও State এর মধ্যে পার্থক্য কি?",ans:"কোন সময়/ কি করলে Webpage এর Data এর অবস্তা কি হবে তা ম্যানেজ করতে State ব্যবহার করা হয়। এইটা  Read write উভয় করা যায়। Props হচ্ছে এক Component থেকে আরেক Component এ ডাটা আদান প্রদান করার একটা মাধ্যম। এইটা দিয়ে শুধু Data Read করা যায়।"},
    {no:3,ques:"useState কিভাবে কাজ করে?",ans:"useState হচ্ছে ওয়েবসাইট এর ডাটা ম্যানেজ করার জন্য ব্যবহার করা হয়। এটা মুলত একটা Function যা প্যারামিটার আকারে Data এর Initial State নেয়। Return করার সময় এটি একটি Array দেয় যার ভিতর ২টি ইলিমেন্ট থাকে। ১ম ইলিমেন্ট থেকে আমাদের প্যারামিটার আকারে আমাদের পাঠানো ডাটা পাওয়া যায় এবং ২য় ইলিমেন্ট থেকে একটি ফাংশন পাওয়া যায় যেটি আমাদের State পরিবর্তন করতে ব্যবহার হয়।"},

]

const Questions = () => {
    return (
        <div className="questions">
            <SectionTitle
                title="Question Bar"
                desc="Get The best question solutions"
            />
            <div className="row">
                {
                    QandA.length>0 && QandA.map((Q)=><Question key={Q.no}  ques={Q.ques} ans={Q.ans}/>)
                }
                
            </div>
        </div>
    );
};

export default Questions;
