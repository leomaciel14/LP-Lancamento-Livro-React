import React, { useState } from "react";
import Modal from "react-modal";
import "./ModalStyles.css";
import { FaFileDownload } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

Modal.setAppElement("#root");

export const Content = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="relative sm:mb-0 mb-24">
            <div>
                {/* Banner para telas ultrawide */}
                <div className="absolute -z-10 hidden xl:brightness-80 md:brightness-50 2xl:block">
                    <img
                        className="min-h-[800px] w-full object-cover"
                        src="./Banner-Background_Wide.webp"
                        alt="Banner Background"
                    />
                </div>

                {/* Banner para telas grandes */}
                <div className="absolute -z-10 hidden 2xl:hidden md:brightness-50 md:block">
                    <img
                        className="md:min-h-[1080px] xl:min-h-[800px] max-h-[800px] object-cover"
                        src="./Banner-Background.webp"
                        alt="Banner Background"
                    />
                </div>

                {/* Banner para telas menores */}
                <div className="absolute -z-10 brightness-50 md:hidden">
                    <img
                        className="w-full h-[1000px] object-cover"
                        src="./Banner-Background_Mobile.webp"
                        alt="Banner Background Mobile"
                    />
                </div>
            </div>

            <div className="flex flex-col-reverse items-center justify-between pt-40 p-6 md:p-12 md:pt-40 lg:p-32 lg:pt-40 lg:flex-row text-left">
                <div className="lg:w-1/2">
                    <h1 className="font-serif text-branco sm:text-7xl lg:text-7xl xl:text-7xl 2xl:text-8xl">
                        Relatos de um <br /> Vampiro na Guerra
                    </h1>
                    <p className="text-branco mt-4 lg:mt-6 text-sm md:text-base lg:text-xl 2xl:text-2xl">
                        Hermina, uma jovem obscurecida pela monotonia de sua
                        vida, tem sua existência transformada ao se deparar com
                        um encontro extraordinário. Em uma história que ecoa a
                        bravura de Mulan, ela é lançada em um turbilhão de
                        eventos que mudarão não apenas sua vida, mas o destino
                        de sua nação.
                        <br />
                        <br />
                        Ambientado na Hungria, nas vésperas da Primeira Guerra,
                        Mina se vê diante de um dilema que irá desencadear uma
                        reação em cadeia irreversível. Enquanto tenta esconder
                        seu verdadeiro eu e enfrenta um mito que se torna
                        realidade, ela se vê obrigada a escolher entre abandonar
                        quem era ou abraçar cada parte de si mesma.
                    </p>
                    <button
                        className="text-branco mt-4 lg:mt-6"
                        onClick={openModal}
                    >
                        Leia os primeiros capítulos de graça
                    </button>
                </div>
                <img
                    className="w-4/5 sm:w-3/5 max-w-[550px] h-auto mb-4 lg:ml-12 2xl:w-full"
                    src="./Book-Kit.webp"
                    alt="Book Kit"
                />
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Leitura dos Primeiros Capítulos"
                className="modal"
                overlayClassName="overlay"
            >
                <button
                    className="p-4 text-2xl rounded-xl close-button"
                    onClick={closeModal}
                >
                    <MdOutlineClose />
                </button>
                <a
                    href="/Primeiros-Capítulos.pdf"
                    download="Primeiros-Capítulos.pdf"
                    className="download-button p-4 text-2xl rounded-xl"
                >
                    <FaFileDownload />
                </a>
                <iframe
                    className="w-full h-full"
                    src="./Primeiros-Capítulos.pdf"
                    title="Primeiros Capítulos"
                />
            </Modal>
        </div>
    );
};
