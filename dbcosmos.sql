-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 05-05-2022 a las 14:19:34
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dbcosmos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `subtitulo` text COLLATE utf8_unicode_ci NOT NULL,
  `cuerpo` text COLLATE utf8_unicode_ci NOT NULL,
  `img_id` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'Black Holes Raze Thousands of Stars to Fuel Growth', 'A new survey of over 100 galaxies by NASA\'s Chandra X-ray Observatory has uncovered signs that black holes are demolishing thousands of stars in a quest to pack on weight.These new results suggest a somewhat violent path for at least some of these black holes to reach their present size — stellar destruction on a scale that has rarely if ever been seen before.', 'Astronomers have made detailed studies of two distinct classes of black holes. The smaller variety are \"stellar-mass\" black holes that typically weigh 5 to 30 times the mass of the Sun. On the other end of the spectrum are the supermassive black holes that live in the middle of most large galaxies, which weigh millions or even billions of solar masses. In recent years, there has also been evidence that an in-between class called \"intermediate-mass black holes\" (IMBHs) exists. The new study with Chandra could explain how such IMBHs are made through the runaway growth of stellar-mass black holes.\r\n\r\nOne key to making IMBHs may be their environment. This latest research looked at very dense clusters of stars in the centers of galaxies. With stars in such close proximity, many stars will pass within the gravitational pull of black holes in the centers of the clusters. Theoretical work by the team implies that if the density of stars in a cluster — the number packed into a given volume — is above a threshold value, a stellar-mass black hole at the center of the cluster will undergo rapid growth as it pulls in, shreds and ingests the abundant neighboring stars in close proximity.\r\n\r\nOf the clusters in the new Chandra study, the ones with density above this threshold had about twice as many growing black holes as the ones below the density threshold. The density threshold depends also on how quickly the stars in the clusters are moving.\r\n\r\nThe process suggested by the latest Chandra study can occur at any time in the universe\'s history, implying that intermediate-mass black holes can form billions of years after the Big Bang, right up to the present day.\r\n\r\nA paper describing these results was accepted and appears in The Astrophysical Journal. It is also available online. The authors of the study are Vivienne Baldassare (Washington State University), Nicolas C. Stone (Hebrew University in Jerusalem, Israel), Adi Foord (Stanford University), Elena Gallo (University of Michigan), and Jeremiah Ostriker (Princeton University).\r\n\r\nNASA\'s Marshall Space Flight Center manages the Chandra program. The Smithsonian Astrophysical Observatory\'s Chandra X-ray Center controls science operations from Cambridge, Massachusetts, and flight operations from Burlington, Massachusetts.', ''),
(2, 'Titulo editado', 'Subtitulo editado', 'Cuerrrpo editado', 'who0he3metqwanm7xayy'),
(4, 'Nueva novedad IMG', 'a ver la imagen', 'Rocket!!!', 'tr0yrqrgehrfqeojpp87'),
(5, 'Imagen 2', 'testr2', 'a ver si sale', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'Federico', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'Ezequiel', '827ccb0eea8a706c4c34a16891f84e7b');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
