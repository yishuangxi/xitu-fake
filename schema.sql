
DROP database if EXISTS xitu;
CREATE DATABASE IF NOT EXISTS xitu DEFAULT CHARACTER SET UTF8 COLLATE UTF8_general_ci;
use xitu;

# 用戶表
CREATE TABLE `user` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `username` VARCHAR(20) NOT NULL COMMENT '用户名',
  `password` VARCHAR(20) NOT NULL,
  `enabled` ENUM('0', '1') NOT NULL DEFAULT '1' COMMENT '是否可用',
  `created_at` DATETIME NOT NULL DEFAULT NOW() COMMENT '创建时间',
  `updated_at` DATETIME NOT NULL DEFAULT NOW() COMMENT '更新时间',
  PRIMARY KEY  (`id`),
  UNIQUE KEY (`username`)
) ENGINE=innodb  DEFAULT CHARSET=UTF8 AUTO_INCREMENT=100000 ;

# 文章表
CREATE TABLE `article` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '文章ID',
  `title` VARCHAR(64) NOT NULL COMMENT '文章标题',
  `link` VARCHAR(256) NOT NULL COMMENT '文章链接',
  `desc` VARCHAR(256) NOT NULL COMMENT '文章描述',
  `figure` VARCHAR(256) NOT NULL DEFAULT '' COMMENT '文章配图',
  `type` ENUM('1', '2', '3') DEFAULT '1' NOT NULL COMMENT '文章类型: 1:原创; 2:墙外; 3: 英文',
  `tag` VARCHAR(64) NOT NULL DEFAULT '' COMMENT '文章标签,可为空',
  `cate_id` INT(10) NOT NULL,
  `user_id` INT(10) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT NOW() COMMENT '',
  `updated_at` DATETIME NOT NULL DEFAULT NOW() COMMENT '',
  PRIMARY KEY (`id`)
) ENGINE=innodb DEFAULT CHARSET=UTF8 AUTO_INCREMENT=100000;

#分类表
CREATE TABLE `cate` (
  `id` TINYINT NOT NULL AUTO_INCREMENT COMMENT '分类ID',
  `name` VARCHAR(20) NOT NULL COMMENT '分类名称',
  `desc` VARCHAR(20) NOT NULL COMMENT '分类描述',
  `created_at` DATETIME NOT NULL DEFAULT NOW() COMMENT '',
  `updated_at` DATETIME NOT NULL DEFAULT NOW() COMMENT '',
  PRIMARY KEY (`id`)
) ENGINE=innodb DEFAULT CHARSET=UTF8 AUTO_INCREMENT=10;

#评论表
CREATE TABLE `comment` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '',
  `content` VARCHAR(256) NOT NULL COMMENT '评论内容',
  `article_id` INT(10) UNSIGNED NOT NULL COMMENT '目标文章ID',
  `user_id` INT(10) UNSIGNED NOT NULL COMMENT '用户ID',
  `created_at` DATETIME NOT NULL DEFAULT NOW() COMMENT '',
  `updated_at` DATETIME NOT NULL DEFAULT NOW() COMMENT '',
  PRIMARY KEY (`id`),
  KEY (`article_id`, `user_id`),
  KEY (`article_id`)
) ENGINE=innodb DEFAULT CHARSET=UTF8 AUTO_INCREMENT=100000;

#点赞表
CREATE TABLE `like` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '',
  `article_id` INT(10) UNSIGNED NOT NULL COMMENT '目标文章ID',
  `user_id` INT(10) UNSIGNED NOT NULL COMMENT '用户ID',
  `created_at` DATETIME NOT NULL DEFAULT NOW() COMMENT '',
  `updated_at` DATETIME NOT NULL DEFAULT NOW() COMMENT '',
  PRIMARY KEY (`id`),
  KEY (`article_id`, `user_id`),
  KEY (`article_id`)
) ENGINE=innodb DEFAULT CHARSET=UTF8 AUTO_INCREMENT=100000;

# # 文章-分类-关系表: 一对多
# CREATE TABLE `r_article_cate` (
#   `article_id` INT(10) UNSIGNED NOT NULL ,
#   `cate_id` TINYINT NOT NULL ,
#   PRIMARY KEY (`article_id`, `cate_id`),
#   UNIQUE KEY (`article_id`) COMMENT '文章ID唯一: 一篇文章只能属于一个分类',
#   KEY(`cate_id`)
# ) ENGINE=innodb DEFAULT CHARSET=UTF8 AUTO_INCREMENT=100000;


# 文章-点赞-关系表
# CREATE TABLE `r_article_like` (
#   `article_id` INT(10) UNSIGNED NOT NULL ,
#   `user_id` INT(10) UNSIGNED NOT NULL ,
#   PRIMARY KEY (`article_id`, `user_id`),
#   KEY (`article_id`)
# ) ENGINE=innodb DEFAULT CHARSET=UTF8 AUTO_INCREMENT=100000;


INSERT INTO `user` (`id`, `username` , `password`, `enabled`, `created_at`, `updated_at`) VALUES
  (NULL , 'aaa', '111', '1', '2016-08-20 10:10:10', '2016-08-20 10:10:20'),
  (NULL , 'bbb', '111', '1', '2016-08-20 10:10:11', '2016-08-20 10:10:20'),
  (NULL , 'ccc', '111', '1', '2016-08-20 10:10:12', '2016-08-20 10:10:20'),
  (NULL , 'ddd', '111', '1', '2016-08-20 10:10:13', '2016-08-20 10:10:20');

INSERT INTO `article` (`id`, `title`, `link`, `desc`, `figure`, `type`, `tag`,`cate_id`, `user_id`,`created_at`, `updated_at`) VALUES
  (1, '技术正宗与野路子1', 'http://gold.xitu.io/post/57ab4bd32e958a0066cf7041','文章描述1', 'http://ac-mhke0kuv.clouddn.com/5371f4d4420cec838475.jpg?imageView/2/w/800/h/600/q/80/format/jpeg', '1','技术', 1, 1, '2016-08-20 10:10:13', '2016-08-20 10:10:20'),
  (2, '技术正宗与野路子2', 'http://gold.xitu.io/post/57ab4bd32e958a0066cf7041','文章描述2', 'http://ac-mhke0kuv.clouddn.com/5371f4d4420cec838475.jpg?imageView/2/w/800/h/600/q/80/format/jpeg', '1','技术', 2, 2, '2016-08-20 10:10:13', '2016-08-20 10:10:20'),
  (3, '技术正宗与野路子3', 'http://gold.xitu.io/post/57ab4bd32e958a0066cf7041','文章描述3', 'http://ac-mhke0kuv.clouddn.com/5371f4d4420cec838475.jpg?imageView/2/w/800/h/600/q/80/format/jpeg', '1','技术', 3, 1, '2016-08-20 10:10:13', '2016-08-20 10:10:20'),
  (4, '技术正宗与野路子4', 'http://gold.xitu.io/post/57ab4bd32e958a0066cf7041','文章描述4', 'http://ac-mhke0kuv.clouddn.com/5371f4d4420cec838475.jpg?imageView/2/w/800/h/600/q/80/format/jpeg', '1','技术', 3, 2, '2016-08-20 10:10:13', '2016-08-20 10:10:20');


INSERT INTO `cate` (`id`, `name`, `desc`, `created_at`, `updated_at`) VALUES
  (1 , '前端', '前端描述', '2016-08-20 10:10:10', '2016-08-20 10:10:20'),
  (2 , '设计', '设计描述', '2016-08-20 10:10:11', '2016-08-20 10:10:20'),
  (3 , '后端', '后端描述', '2016-08-20 10:10:12', '2016-08-20 10:10:20'),
  (4 , 'android', '安卓描述', '2016-08-20 10:10:13', '2016-08-20 10:10:20');


