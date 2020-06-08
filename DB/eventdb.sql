-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema eventdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `eventdb` ;

-- -----------------------------------------------------
-- Schema eventdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `eventdb` DEFAULT CHARACTER SET utf8 ;
USE `eventdb` ;

-- -----------------------------------------------------
-- Table `goal`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `goal` ;

CREATE TABLE IF NOT EXISTS `goal` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` TEXT NOT NULL,
  `sticker_url` VARCHAR(1000) NOT NULL,
  `achieved` TINYINT NOT NULL,
  `create_date` DATETIME NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS eventuser@localhost;
SET SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';
CREATE USER 'eventuser'@'localhost' IDENTIFIED BY 'eventuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'eventuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `goal`
-- -----------------------------------------------------
START TRANSACTION;
USE `eventdb`;
INSERT INTO `goal` (`id`, `name`, `description`, `sticker_url`, `achieved`, `create_date`, `category`) VALUES (1, 'exercise', 'work out for 30 min every day', 'https://i.imgur.com/cxt6Mw7.png', 0, '2020-06-05 09:26:00', 'physical health');
INSERT INTO `goal` (`id`, `name`, `description`, `sticker_url`, `achieved`, `create_date`, `category`) VALUES (2, 'water intake', 'drink at least 8 glasses a day', 'https://i.imgur.com/dlTyBlo.png', 0, '2020-06-05 09:26:00', 'physical health');
INSERT INTO `goal` (`id`, `name`, `description`, `sticker_url`, `achieved`, `create_date`, `category`) VALUES (3, 'veggie serving', 'eat at least five servings of veggies a day', 'https://i.imgur.com/xzop3fx.png', 0, '2020-06-05 09:26:00', 'physical health');
INSERT INTO `goal` (`id`, `name`, `description`, `sticker_url`, `achieved`, `create_date`, `category`) VALUES (4, 'meditation', 'meditate for 10 minutes', 'https://i.imgur.com/ZPiYKma.png', 0, '2020-06-05 09:26:00', 'mental health');
INSERT INTO `goal` (`id`, `name`, `description`, `sticker_url`, `achieved`, `create_date`, `category`) VALUES (5, 'limit screen time', 'limit leisure screen time to 2 hours a day', 'https://i.imgur.com/kcqoryt.png', 0, '2020-06-05 09:26:00', 'mental health');
INSERT INTO `goal` (`id`, `name`, `description`, `sticker_url`, `achieved`, `create_date`, `category`) VALUES (6, 'check in with friends', 'text friends and see how they\'re doing', 'https://i.imgur.com/U8Wzl6T.png', 0, '2020-06-05 09:26:00', 'social health');
INSERT INTO `goal` (`id`, `name`, `description`, `sticker_url`, `achieved`, `create_date`, `category`) VALUES (7, 'prayer', 'pray for ten minutes a day', 'https://i.imgur.com/rv9QOBt.png', 0, '2020-06-05 09:26:00', 'spiritual health');

COMMIT;

