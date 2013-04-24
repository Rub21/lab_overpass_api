lab_overpass_api
================


## Consultas

	<query type="node">
	  <newer than="2011-08-01T00:00:00Z"/>
	  <has-kv k="highway"/>
	  <bbox-query 
	s="25.5494172" n="25.5915935" w="-80.4065652" e="-80.3664774"/>
	</query>
	<print mode="meta"/>



## LDascarga de datos de una fecha a otra

	<query type="way">
	  <newer than="2013-04-20T00:00:00Z 2013-04-21T00:00:00Z"/>
	  <has-kv k="highway"/>
	  <bbox-query 
	s="27.8366474" n="29.000934" w="-81.4031982" e="-79.7717285"/>
	</query>
	<print mode="meta"/>

