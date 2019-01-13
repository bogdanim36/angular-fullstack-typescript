USE `<%=script.schema%>`;
DROP TABLE IF EXISTS `<%= entities.paramCase %>`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `<%= entities.paramCase %>` (
  <%= script.columns %>,
  PRIMARY KEY (`<%=script.primaryKey%>`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;