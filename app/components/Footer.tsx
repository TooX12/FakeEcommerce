import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="relative z-10 text-center max-w-12xl mx-auto bg-gray-900 text-white flex flex-col items-center">
      <div className="container px-6 pt-6">
        <div className="flex justify-center mb-6">
          <Link href="/">
            <a
              type="button"
              className="flex justify-center items-center rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
            >
              <i className="bx bxl-facebook"></i>
            </a>
          </Link>
          <Link href="/">
            <a
              type="button"
              className="flex justify-center items-center rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
            >
              <i className="bx bxl-twitter"></i>
            </a>
          </Link>
          <Link href="/">
            <a
              type="button"
              className="flex justify-center items-center rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
            >
              <i className="bx bxl-google"></i>
            </a>
          </Link>
          <Link href="/">
            <a
              type="button"
              className="flex justify-center items-center rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
            >
              <i className="bx bxl-instagram-alt"></i>
            </a>
          </Link>
          <Link href="/">
            <a
              type="button"
              className="flex justify-center items-center rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </Link>
          <Link href="/">
            <a
              type="button"
              className="flex justify-center items-center rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
            >
              <i className="bx bxl-github"></i>
            </a>
          </Link>
        </div>

        <div>
          <form action="">
            <div className="md:grid md:grid-cols-3 grid-cols-1 gap-4 flex flex-col justify-center items-center">
              <div className="md:ml-auto md:mb-6">
                <p className="">
                  <strong>Suscríbete a nuestro boletín</strong>
                </p>
              </div>

              <div className="md:mb-6">
                <input
                  type="text"
                  className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
                  id="exampleFormControlInput1"
                  placeholder="Correo electrónico"
                />
              </div>

              <div className="md:mr-auto mb-6">
                <button
                  type="submit"
                  className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                >
                  Subscribir
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="mb-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam, commodi
            optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </div>

        <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 place-content-center">
          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5">COLECCIONES</h5>

            <ul className="list-none mb-0">
              <li>
                <Link href="/">
                  <a className="text-white">Superstar</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-white">Originals</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-white">Ultraboost</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-white">Yeezy</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5">OBTENER AYUDA</h5>

            <ul className="list-none mb-0">
              <li>
                <Link href="/">
                  <a className="text-white">Estado del pedido</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-white">Envío y entrega</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-white">Devoluciones</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-white">Opciones de pago</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5">ACERCA DE</h5>

            <ul className="list-none mb-0">
              <li>
                <Link href="/">
                  <a className="text-white">Noticias</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-white">Empleo</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-white">Inversionistas</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-white">Sostenibilidad</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5">
              INFORMACIÓN DE LA EMPRESA
            </h5>

            <ul className="list-none mb-0">
              <li>
                <Link href="/">
                  <a className="text-white">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-white">Trabaja en Nuestro Equipo</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-white">Prensa</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-white">Información Corporativa</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full text-center p-4 bg-black/20">
        <p className="text-white">© 2022 Copyright: Fake Ecommerce</p>
      </div>
    </footer>
  );
}

export default Footer;
