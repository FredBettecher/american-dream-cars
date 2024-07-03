"use client";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { IoCheckmarkCircleOutline, IoCloseCircleOutline, IoMail } from "react-icons/io5";
import { motion } from 'framer-motion';

export default function Email() {
  const form = useRef();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState({ visible: false, message: '', type: '' });
  const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const public_key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const validate = () => {
    const newErrors = {};
    if (!userName) newErrors.userName = 'Nome é obrigatório.';
    if (!userEmail) {
      newErrors.userEmail = 'E-mail é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(userEmail)) {
      newErrors.userEmail = 'E-mail inválido.';
    }
    if (!message) newErrors.message = 'Mensagem é obrigatória.';
    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    emailjs.sendForm(service_id, template_id, form.current, public_key)
      .then((result) => {
        if (result.text === 'OK') {
          setAlert({ visible: true, message: 'E-mail enviado com sucesso', type: 'success' });
        } else {
          setAlert({ visible: true, message: 'Erro ao enviar e-mail', type: 'error' });
        }
      }, (error) => {
        setAlert({ visible: true, message: 'Erro ao enviar e-mail', type: 'error' });
      });
  };

  return (
    <>
      {alert.visible && (
        <button onClick={() => setAlert({ visible: false, message: '', type: '' })} className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg flex items-center ${alert.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {alert.type === 'success' ? <IoCheckmarkCircleOutline className='mr-2 lg:text-2xl' /> : <IoCloseCircleOutline className='mr-2 lg:text-2xl' />}
          {alert.message}
        </button>
      )}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="mt-8 flex flex-col w-[90%] gap-2 lg:w-[33%] text-[#333333]"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <div className="flex items-center text-[#046076]">
          <IoMail className="lg:text-4xl text-2xl mr-2" />
          <p className="lg:text-2xl">E-mail</p>
        </div>
        <input
          type="text"
          name='user_name'
          placeholder="Nome"
          className="form-input rounded bg-[#FFFCF5] text-sm lg:text-base"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        {errors.userName && <p className="text-red-500 text-sm">{errors.userName}</p>}
        <input
          type="email"
          name='user_email'
          placeholder="E-mail"
          className="form-input rounded bg-[#FFFCF5] text-sm lg:text-base"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        {errors.userEmail && <p className="text-red-500 text-sm">{errors.userEmail}</p>}
        <textarea
          name="message"
          placeholder="Fale sobre o seu carro clássico dos sonhos. Nos dê detalhes sobre o fabricante, o modelo, o ano e as cores. A nossa equipe entrará em contato o mais breve possível. Vamos transformar o seu sonho em realidade!"
          className="form-input rounded h-32 bg-[#FFFCF5] text-sm lg:text-base"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        <button
          className="bg-[#046076] rounded mt-2 font-bold text-[#FFFCF5] p-2 hover:bg-[#059CC6] lg:text-lg"
          type='submit'
          value='Send'
        >
          Faça uma Cotação
        </button>
      </motion.form>
    </>
  );
}
