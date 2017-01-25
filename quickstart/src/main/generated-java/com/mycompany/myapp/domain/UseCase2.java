/*
 * Source code generated by Celerio, a Jaxio product.
 * Documentation: http://www.jaxio.com/documentation/celerio/
 * Follow us on twitter: @jaxiosoft
 * Need commercial support ? Contact us: info@jaxio.com
 * Template pack-angular:src/main/java/domain/Entity.java.e.vm
 */
package com.mycompany.myapp.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Size;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.validator.constraints.NotEmpty;

import com.google.common.base.MoreObjects;
import com.google.common.base.Objects;

/**
 * USE_CASE_2 has a string pk, just for demo
 */
@Entity
@Table(name = "USE_CASE_2")
public class UseCase2 implements Identifiable<String>, Serializable {
    private static final long serialVersionUID = 1L;
    private static final Logger log = Logger.getLogger(UseCase2.class.getName());

    // Raw attributes
    private String id;
    private String dummy;

    // One to many
    private List<UseCase3> useCase3s = new ArrayList<UseCase3>();

    @Override
    public String entityClassName() {
        return UseCase2.class.getSimpleName();
    }

    // -- [id] ------------------------

    @Override
    @Column(name = "ID", length = 32)
    @GeneratedValue(generator = "strategy-uuid")
    @GenericGenerator(name = "strategy-uuid", strategy = "uuid")
    @Id
    public String getId() {
        return id;
    }

    @Override
    public void setId(String id) {
        this.id = id;
    }

    public UseCase2 id(String id) {
        setId(id);
        return this;
    }

    @Override
    @Transient
    public boolean isIdSet() {
        return id != null && !id.isEmpty();
    }
    // -- [dummy] ------------------------

    @NotEmpty
    @Size(max = 100)
    @Column(name = "DUMMY", nullable = false, length = 100)
    public String getDummy() {
        return dummy;
    }

    public void setDummy(String dummy) {
        this.dummy = dummy;
    }

    public UseCase2 dummy(String dummy) {
        setDummy(dummy);
        return this;
    }

    // -----------------------------------------------------------------
    // One to Many support
    // -----------------------------------------------------------------

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // one to many: useCase2 ==> useCase3s
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    @OneToMany(mappedBy = "id2", orphanRemoval = true)
    public List<UseCase3> getUseCase3s() {
        return useCase3s;
    }

    /**
     * Set the {@link UseCase3} list.
     * It is recommended to use the helper method {@link #addUseCase3(UseCase3)} / {@link #removeUseCase3(UseCase3)}
     * if you want to preserve referential integrity at the object level.
     *
     * @param useCase3s the list to set
     */
    public void setUseCase3s(List<UseCase3> useCase3s) {
        this.useCase3s = useCase3s;
    }

    /**
     * Helper method to add the passed {@link UseCase3} to the {@link #useCase3s} list
     * and set this id2 on the passed useCase3 to preserve referential
     * integrity at the object level.
     *
     * @param useCase3 the to add
     * @return true if the useCase3 could be added to the useCase3s list, false otherwise
     */
    public boolean addUseCase3(UseCase3 useCase3) {
        if (getUseCase3s().add(useCase3)) {
            useCase3.setId2(this);
            return true;
        }
        return false;
    }

    /**
     * Helper method to remove the passed {@link UseCase3} from the {@link #useCase3s} list and unset
     * this id2 from the passed useCase3 to preserve referential integrity at the object level.
     *
     * @param useCase3 the instance to remove
     * @return true if the useCase3 could be removed from the useCase3s list, false otherwise
     */
    public boolean removeUseCase3(UseCase3 useCase3) {
        if (getUseCase3s().remove(useCase3)) {
            useCase3.setId2(null);
            return true;
        }
        return false;
    }

    /**
     * Apply the default values.
     */
    public UseCase2 withDefaults() {
        return this;
    }

    /**
     * Equals implementation using a business key.
     */
    @Override
    public boolean equals(Object other) {
        return this == other || (other instanceof UseCase2 && hashCode() == other.hashCode());
    }

    private IdentifiableHashBuilder identifiableHashBuilder = new IdentifiableHashBuilder();

    @Override
    public int hashCode() {
        return identifiableHashBuilder.hash(log, this);
    }

    /**
     * Construct a readable string representation for this UseCase2 instance.
     * @see java.lang.Object#toString()
     */
    @Override
    public String toString() {
        return MoreObjects.toStringHelper(this) //
                .add("id", getId()) //
                .add("dummy", getDummy()) //
                .toString();
    }
}