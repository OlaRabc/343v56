package pl.calendar.calendar.Repository;

public interface FreeVisitRepository {
    /*
public interface FirstFreeVisitRepository  extends JpaRepository<FirstFreeVisit,Long> {
    @Query(value = "select doctor_id AS doctor," +
            "(select visit_date from visit" +
            "where visit_status_id=1 and doctor_id=doctor and visit_date>current_date() order by visit_date LIMIT 1)" +
            "as \"firstFreeDate\" from visit group by doctor_id;", nativeQuery = true);
    List<Object[]> findAppaItemsNumberByCategory();

}
        */
}
