async function getUserInfo(id) {
  const user = await queryDatabase({ idUser: id });
  const fillUserWithData = await fillDatosUsuario(user);
  return fillDireccionUsuario(fillUserWithData);
}

const userWithFullData = await getUserInfo('111555');
console.log('userWithFullData', userWithFullData);