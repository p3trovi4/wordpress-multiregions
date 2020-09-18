**Master Environment**: [${globals.protocol}://${settings.envName}-1.${globals.domain-1}/](${globals.protocol}://${settings.envName}-1.${globals.domain-1}/)   
**Slave Environment 1**: [${globals.protocol}://${settings.envName}-2.${globals.domain-2}/](${globals.protocol}://${settings.envName}-2.${globals.domain-2}/)
**Slave Environment 2**: [${globals.protocol}://${settings.envName}-3.${globals.domain-3}/](${globals.protocol}://${settings.envName}-3.${globals.domain-3}/)

Use the following credentials to access the admin panel:

**Admin Panel**: [${globals.protocol}://${globals.domain}/wp-admin/](${globals.protocol}://${globals.domain}/wp-admin/)  
**Login**: ${user.email}  
**Password**: ${globals.wp_admin_pass}  

Manage the database nodes using the next credentials:

**phpMyAdmin Panel 1**: [https://node${globals.master_id_galera-1}-${settings.envName}-1.${globals.domain-1}/](https://node${globals.master_id_galera-1}-${settings.envName}-1.${globals.domain-1}/)   
**phpMyAdmin Panel 2**: [https://node${globals.master_id_galera-2}-${settings.envName}-2.${globals.domain-2}/](https://node${globals.master_id_galera-2}-${settings.envName}-2.${globals.domain-2}/)
**phpMyAdmin Panel 3**: [https://node${globals.master_id_galera-3}-${settings.envName}-3.${globals.domain-3}/](https://node${globals.master_id_galera-3}-${settings.envName}-3.${globals.domain-3}/)

**Username**: ${globals.db_user}    
**Password**: ${globals.db_pass}  

Manage the LiteSpeed ADC and LiteSpeed WEB nodes using the next credentials:

**Username**: admin    
**Password**: ${globals.ls_admin_pass}  
