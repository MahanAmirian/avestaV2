import { Popover } from "@headlessui/react";
import { BsFillSendFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { postCommentService } from "../../../api/services/postComment";
import {  toast } from "react-toastify";

const schema = yup
  .object({
    name: yup.string().required(),
    content: yup.string().required().max(260),
    email: yup.string().required().email(),
  })
  .required();

function SendUserCommentForm() {
  const [isclosePopover, setIsclosePopover] = useState(true);
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    let res = await postCommentService(data);
    if (res.status === 400) {
      return toast.error(res.message);
    }
    if (res.status === 201) {
      return toast.success(res.message);
    }

    toast.warning(res.message);
  };
  // const closePopover = async () => {
  //   setIsclosePopover(true);
  // };

  return (
    <>
    <Popover className=" p-3">
      {({ open }) => (
        <>
          <Popover.Button
            onClick={() => setIsclosePopover(false)}
            className="border-gray-300 rounded-xl bg-gray-200 bg-opacity-80 w-full border-2 flex flex-row justify-center items-center   text-center"
          >
            
            <input
              type="text"
              className="w-full  placeholder:text-xs rounded-2xl cursor-pointer placeholder:text-center placeholder:text-gray-800"
              placeholder="نظر خود را بنویسید"
            />
          </Popover.Button>
          {!isclosePopover && (
            <Popover.Panel
              className="fixed inset-0 flex items-center justify-end pl-36 z-50"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="bg-gray-100 p-10 rounded-2xl flex flex-col justify-start items-end">
                <div
                  onClick={() => setIsclosePopover(true)}
                  className=" py-2 w-2/12 rounded-xl my-2 cursor-pointer text-gray-400 hover:bg-gray-400 hover:text-gray-50 transition-all duration-150 ease-linear text-center  "
                >
                  X
                </div>
                <form
                  className="flex flex-col gap-10"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div>
                    <input
                      className="w-full py-2 rounded-xl placeholder:text-center placeholder:text-xs focus:border border-sky-400 border bg-gray-300 focus:bg-gray-50"
                      min={3}
                      max={100}
                      placeholder="نام خود را وارد کنید"
                      {...register("name")}
                    />
                  </div>
                  <div>
                    <input
                      className="w-full py-2 rounded-xl placeholder:text-center placeholder:text-xs focus:border border-sky-400 border bg-gray-300 focus:bg-gray-50"
                      type="email"
                      placeholder="ایمیل خود را وارد کنید"
                      {...register("email")}
                    />
                  </div>
                  <div className="flex flex-row-reverse rounded-xl gap-4 bg-gray-300 p-2">
                    <input
                      className="w-full  py-2 placeholder:text-center placeholder:text-xs placeholder:text-black focus:border bg-gray-300 focus:bg-gray-50"
                      min={1}
                      max={260}
                      {...register("content")}
                      placeholder="نظر خود را بنویسید"
                    />
                    <button
                      // onClick={() => {
                      //    setIsclosePopover(true)
                      // }}
                      type="submit"
                      className="bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      <div className="p-3 rounded-full bg-green-500">
            <BsFillSendFill color="white"  size={18} />
            </div>
                    </button>
                  </div>
                </form>
              </div>
            </Popover.Panel>
          )}
        </>
      )}
    </Popover>
    </>

  );
}

export default SendUserCommentForm;
