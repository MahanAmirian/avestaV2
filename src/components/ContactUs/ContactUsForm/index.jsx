import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "flowbite-react";
import { postContactUSContent } from "../../../api/services/contactUsServise";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const schema = yup
  .object({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    email: yup.string().required().email(),
    message: yup.string().required(),
  })
  .required();
function ContactUsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    let res = await postContactUSContent(data);
    if (res.status === 400) {
      return toast.error(res.message);
    }
    if (res.status === 201) {
      return toast.success(res.message);
    }

    toast.warning(res.message);
  };
  // const notify = () => toast("Wow so easy!");
  return (
    <>
      <ToastContainer />
      <div className="  flex flex-col  justify-between">
        <h1 className="font-extrabold  text-xl mb-10     ">
          با ما در ارتباط باشید
        </h1>
        <form
          className="w-full flex h-fit  flex-col justify-center items-center gap-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-row gap-10 ">
            <div className="flex flex-col gap-3 justify-start items-start">
              <label htmlFor="First Name" className="">
                نام
              </label>
              <input
                placeholder="نام خود را  وارد کنید"
                className="  text-blue-700 bg-transparent border-b-2 border-gray-400 w-full placeholder:text-xs   appearance-none     py-2 px-4  leading-tight focus:outline-none  focus:border-blue-700 "
                {...register("first_name")}
              />
              <p className="text-xs text-red-600">
                {errors.first_name?.message}
              </p>
            </div>
            <div className="flex flex-col gap-3 justify-start items-start">
              <label htmlFor="Last Name" className="">
                نام خانوادگی
              </label>
              <input
                placeholder="نام خانوادگی خود را وارد کنید"
                className="  text-blue-700 bg-transparent border-b-2 border-gray-400 w-full placeholder:text-xs   appearance-none   py-2 px-4  leading-tight focus:outline-none  focus:border-blue-700 "
                {...register("last_name")}
              />
              <p className="text-xs text-red-600">
                {errors.last_name?.message}
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <div className="flex flex-col gap-3 justify-start items-start">
              <label htmlFor="email" className="">
                ایمیل
              </label>
              <input
                placeholder="ایمیل خودرا وارد کنید"
                className="   text-blue-700 bg-transparent border-b-2 border-gray-400 w-full placeholder:text-xs   appearance-none      py-2 px-4  leading-tight focus:outline-none  focus:border-blue-700"
                type="email"
                {...register("email")}
              />
              <p className="text-xs text-red-600"> {errors.email?.message}</p>
            </div>
            <div className="flex flex-col gap-3 justify-start items-start">
              <label htmlFor="message" className="">
                پیام
              </label>
              <input
                placeholder="نظر خود را بنوسید"
                className="  text-blue-700 bg-transparent border-b-2 border-gray-400 w-full placeholder:text-xs   appearance-none      py-2 px-4  leading-tight focus:outline-none  focus:border-blue-700"
                type="text"
                {...register("message")}
              />
              <p className="text-xs text-red-600">{errors.message?.message}</p>
            </div>
          </div>

          <Button className="w-full  bg-sky-600" type="submit">
            ارسال
          </Button>
        </form>
      </div>
    </>
  );
}

export default ContactUsForm;
